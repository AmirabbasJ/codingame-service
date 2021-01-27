import { Container } from 'typescript-ioc';

import { ExpressApp } from './app';
import { Logger } from './config';
import { createContainer } from './config/container';

Container.configure(...createContainer());

const app: ExpressApp = new ExpressApp();

const puzzleRouter = app.getPuzzlesRouter();
app.useRouteHandler('/api/v1/puzzle', puzzleRouter);

app.connectToDb();

app.listen();

process.on('unhandledRejection', Container.get(Logger).error);
