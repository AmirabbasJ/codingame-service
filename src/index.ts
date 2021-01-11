import { Container } from 'typescript-ioc';

import { App, ExpressApp } from './app';
import { Logger } from './config';
import { createContainer } from './config/container';

Container.configure(...createContainer());

const app: App = new ExpressApp();

app.listen();

process.on('unhandledRejection', Container.get(Logger).error);
