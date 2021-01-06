import express, { Express } from 'express';
import { logger, serverConfig } from './config';

import puzzleRouter from './routers/expressPuzzleRouter';
import listen from './server';

const app: Express = express();

app.use('/api/v1/puzzle', puzzleRouter);

listen(app, serverConfig, logger);

export default app;
