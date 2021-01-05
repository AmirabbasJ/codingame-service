import express, { Express } from 'express';
import { logger, serverConfig } from './config';

import puzzleRouter from './routers/expressPuzzleRouter';
import createListener from './server';

const app: Express = express();

app.use('/api/v1/puzzle', puzzleRouter);

createListener(app as Express, serverConfig, logger);

export default app;
