import { NextFunction, Request, Response } from 'express-serve-static-core';

export function getBands(req: Request, res: Response, next: NextFunction) {
  res.json({
    message: 'Bands 1!'
  })
}
