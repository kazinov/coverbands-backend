import { Response } from 'express-serve-static-core';

export function getErrorHandler(res: Response){
  return (error) => {
    console.error('Error:', error);
    res.status(500).json({ error });
  };
}