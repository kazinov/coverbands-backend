import { NextFunction, Request, Response } from 'express-serve-static-core';

import { BandsData } from '../../data/bands/bands-data';
import { getErrorHandler } from '../utils/error-handler';
import { isBodyValid } from '../utils/is-body-valid';
import { setUnprocessableEntity } from '../utils/unprocessable-entity';

export class BandsController {
  static get(req: Request, res: Response, next: NextFunction) {
    BandsData.getBands()
      .then((data) => res.status(200).json(data))
      .catch(getErrorHandler(res));
  }

  static post(req: Request, res: Response, next: NextFunction) {
    if (!isBodyValid(req, ['name'])) {
        return setUnprocessableEntity(res);
    }

    BandsData.insertBand(req.body)
      .then((data) => {
        res.status(201).json(data[0]);
      })
      .catch(getErrorHandler(res));
  }
}
