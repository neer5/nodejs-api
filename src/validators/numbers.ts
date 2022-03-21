import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const validateNumber = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body.input || typeof req.body.input !== 'number') {
    return res.status(404).send({ error: 'Invalid input' });
  }
  next();
};
