import express, { Application } from 'express';

import bodyParser from 'body-parser';
import routes from './routes';

const app: Application = express();

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// routes
app.use(routes);

export default app;
