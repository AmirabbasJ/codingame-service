import { Router } from 'express';

import ExpressPuzzleController from '../../controllers/express/puzzle.controller';
import MongoosePuzzleRepo from '../../repository/mongoose/puzzle.repo';

import { mongoosePuzzleConfig } from '../../config';

const puzzleRouter: Router = Router();

const puzzleRepo = new MongoosePuzzleRepo(mongoosePuzzleConfig);
const controller = new ExpressPuzzleController(puzzleRepo);

puzzleRouter.get('/random', controller.getRandomPuzzleHandler);
puzzleRouter.get('/:id', controller.getPuzzleByIdHandler);

export default puzzleRouter;
