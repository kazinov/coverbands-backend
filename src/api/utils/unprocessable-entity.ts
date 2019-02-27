import { Response } from 'express-serve-static-core';

export function setUnprocessableEntity(res: Response, error: string = 'Unprocessable entity'){
  return res
    .status(422)
    .send({ error: error });
}