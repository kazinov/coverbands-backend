import { config } from './config';

const fs = require('fs-extra');

(async function cleanDist() {
  await fs.remove(`${config.rsync.paths.root}/`);
  await fs.ensureDir(`${config.rsync.paths.root}/`);
})();