import { Request, Response, NextFunction } from 'express';
export class NumberValidator {
  public static validateNumber(req: Request, res: Response,next: NextFunction): Response<{ output: string | number }> {
      if (!req.body.input || typeof req.body.input !== 'number') {
        return res.status(404).send({ error: 'Invalid input' });
      }
      next();
  }
}
