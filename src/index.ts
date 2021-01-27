import { Container } from 'typescript-ioc';

import { ExpressApp } from './app';
import { Logger } from './config';
import { createContainer } from './config/container';

Container.configure(...createContainer());

const app: ExpressApp = new ExpressApp();
app.init().listen();

process.on('unhandledRejection', Container.get(Logger).error);
