import { Request, Response } from 'express';

export const getNumber = (
  req: Request,
  res: Response
): Response<{ output: string | number }> => {
  const { input } = req.body;
  let output;
  if (input % 5 === 0 && input % 3 === 0) {
    output = 'CXZTatasoft';
  } else if (input % 5 === 0) {
    output = 'Tatasoft';
  } else if (input % 3 === 0) {
    output = 'CXZ';
  } else {
    output = input > 0 ? input * -1 : input;
  }
  return res.status(200).send({ output });
};
