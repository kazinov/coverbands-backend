import { Request } from 'express-serve-static-core';

export function isBodyValid(req: Request, requiredFields: string[]) {
  for (let requiredParameter of requiredFields) {
    if (!req.body[requiredParameter]) {
      return false;
    }
  }
  return true;
}