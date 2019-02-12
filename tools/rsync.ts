import { argv } from 'yargs';
import { config } from './config';
import { RsyncEnvConfig, RsyncHelper, RsyncPathConfig } from './rsync-helper';
const env = require('env-variable')();

let serverEnv = argv && argv.env;
const rsyncConf = config.rsync;

let rsyncEnvConf: RsyncEnvConfig = rsyncConf.envs[serverEnv];
const rsyncPathConf: RsyncPathConfig = config.rsync.paths;

if (!rsyncEnvConf && env['SERVER']) {
  serverEnv = env['SERVER'];
  rsyncEnvConf = config.rsync.envs[serverEnv];
}

if (!rsyncEnvConf) {
  throw new Error('No environment variable was found, use `--env [envName]` key');
}

RsyncHelper.start(rsyncEnvConf, rsyncPathConf, serverEnv);
