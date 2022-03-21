import { Router } from 'express';
import { validateNumber } from '../validators/numbers';
import { getNumber } from '../controllers/numbers';

const routes = Router();

routes.post('/numbers', validateNumber, getNumber);

export default routes;
