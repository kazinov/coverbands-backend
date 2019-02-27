import * as core from 'express-serve-static-core';
import { getBands } from './get-bands';

const bandsRouteName = 'bands';

export function configureBandsRouting(router: core.Router) {
  router.get(`/${bandsRouteName}`, getBands);
}
