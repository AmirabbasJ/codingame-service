import { Router } from 'express';

import ExpressPuzzleController from '../controllers/expressPuzzleController';
import MongoosePuzzleRepo from '../repository/mongoosePuzzleRepo';

import { logger, mongoosePuzzleConfig } from '../config';

const puzzleRouter: Router = Router();

const puzzleRepo = new MongoosePuzzleRepo(mongoosePuzzleConfig, logger);
const controller = new ExpressPuzzleController(puzzleRepo);

puzzleRouter.get('/random', controller.getRandomPuzzleHandler);
puzzleRouter.get('/:id', controller.getPuzzleByIdHandler);

export default puzzleRouter;
