import express, { Express } from 'express';

import puzzleRouter from './routers/express/puzzle.router';

const app: Express = express();

app.use('/api/v1/puzzle', puzzleRouter);

export default app;
