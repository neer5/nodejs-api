import { Router } from 'express';
import { NumberValidator } from '../validators/numbers.validator';
import { NumberController } from '../controllers/numbers.controller';

const routes = Router();

routes.post('/numbers', NumberValidator.validateNumber, NumberController.getNumber);

export default routes;
