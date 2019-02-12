import { config } from './config';

const fs = require('fs-extra');

(async function copyToDist() {
  await fs.copy(
    `package.json`,
    `${config.rsync.paths.root}/package.json`);
  await fs.copy(
    `package-lock.json`,
    `${config.rsync.paths.root}/package-lock.json`);
})();