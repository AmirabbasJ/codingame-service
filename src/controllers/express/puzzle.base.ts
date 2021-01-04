import { RequestHandler } from 'express';
import PuzzleRepo from '../../repository/base/puzzle.base';

import PuzzleController from '../base/puzzle.base';

interface ExpressPuzzleController extends PuzzleController {
	puzzleRepo: PuzzleRepo;
	getRandomPuzzleHandler: RequestHandler;
	getPuzzleByIdHandler: RequestHandler;
}

export default ExpressPuzzleController;
