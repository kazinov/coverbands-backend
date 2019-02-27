import * as express from 'express'
import { appRouter } from './routing';
import bodyParser = require('body-parser');

export const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', appRouter);