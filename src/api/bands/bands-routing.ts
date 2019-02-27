import * as core from 'express-serve-static-core';
import { BandsController } from './bands.controller';

const bandsRouteName = 'bands';

export function configureBandsRouting(router: core.Router) {
  router.get(`/${bandsRouteName}`, BandsController.get);
  router.post(`/${bandsRouteName}`, BandsController.post);
}
