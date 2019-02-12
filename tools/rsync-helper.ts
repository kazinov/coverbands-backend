import * as _ from 'lodash';
import * as Rsync from 'rsync';

export interface RsyncPathConfig {
  src: string;
  root: string;
}

export interface RsyncEnvConfig {
  dest: string;
  host: Array<string>;
  progress: boolean;
}

export class RsyncHelper {

  static start(envConfig: RsyncEnvConfig, pathConfig: RsyncPathConfig, serverEnv: string) {
    const hostList = _.isArray(envConfig.host) ? envConfig.host : [envConfig.host];
    const rsyncPromises = hostList.map((host: string) => {
      console.log(`RSYNC to '${serverEnv}' ${host}`);

      return this.runRsync(host, envConfig, pathConfig);
    });

    Promise.all(rsyncPromises)
      .then(() => {
        console.log('RSYNC completed for all instances');
      })
      .catch((error) => {
        console.error('RSYNC failure. ', error);
      });
  }

  private static runRsync(host: string, envConfig: RsyncEnvConfig, pathConfig: RsyncPathConfig) {
    const options = {
      archive: true,
      silent: false,
      compress: true,
      incremental: true,
      relative: true,
      emptyDirectories: true,
      recursive: true,
      clean: true,
      progress: envConfig.progress
    };

    const resultDest = `${host}:${envConfig.dest}`;

    const rsync = new Rsync()
      .source(pathConfig.src)
      .destination(resultDest);

    this.setOptions(options, rsync);
    rsync.cwd(pathConfig.root);

    return new Promise((resolve, reject) => {
      rsync.execute((error, code, cmd) => {
        if (error) {
          reject(`${resultDest}: ${error}`);
        } else {
          resolve();
        }
      });
    });
  }

  private static setOptions(options, rsyncInstance): void {
    const flagsMap = {
      'a': options.archive,
      'n': options.dryrun,
      'R': options.relative !== false,
      'c': options.incremental,
      'd': options.emptyDirectories,
      'r': options.recursive && !options.archive,
      't': options.times && !options.archive,
      'u': options.update,
      'v': !options.silent,
      'z': options.compress,
      'progress': options.progress
    };

    _.forOwn(flagsMap, (value, key) => {
      if (value) {
        rsyncInstance.set(key);
      }
    });

    if (options.clean) {
      if (!options.recursive && !options.archive) {
        throw new Error('rsync: clean requires recursive or archive option');
      }
      rsyncInstance.set('delete');
    }
  }
}
