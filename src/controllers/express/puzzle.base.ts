import { Request, Response, NextFunction } from 'express';
import MongoosePuzzleRepo from '../../repository/mongoose/puzzle.repo';

import PuzzleController from '../base/puzzle.base';

interface ExpressPuzzleController extends PuzzleController {
	puzzleRepo: MongoosePuzzleRepo;

	getRandomPuzzleHandler: (
		req: Request,
		res: Response,
		next: NextFunction
	) => void;
	getPuzzleByIdHandler: (
		req: Request,
		res: Response,
		next: NextFunction
	) => void;
}

export default ExpressPuzzleController;
