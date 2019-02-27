import * as express from 'express'
import { configureBandsRouting } from './bands/bands-routing';

const router = express.Router();
configureBandsRouting(router);

export const app = express();
app.use('/', router);