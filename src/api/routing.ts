import * as express from 'express';
import { configureBandsRouting } from './bands/bands-routing';

export const appRouter = express.Router();
configureBandsRouting(appRouter);
