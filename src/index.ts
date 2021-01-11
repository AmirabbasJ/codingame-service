import { ExpressApp, App } from './app';
import { config } from './config';
import ExpressPuzzleController from './controllers/expressPuzzleController';
import PuzzleController from './controllers/puzzleController';
import MongoosePuzzleRepo from './repository/mongoosePuzzleRepo';
import PuzzleRepo from './repository/puzzleRepo';

const { logger } = config;

const puzzleRepo: PuzzleRepo = new MongoosePuzzleRepo(config);
const controller: PuzzleController = new ExpressPuzzleController(puzzleRepo);
const app: App = new ExpressApp(controller, config);

app.listen();

process.on('unhandledRejection', logger.error);
