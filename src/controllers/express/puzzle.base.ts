import { Request, Response, NextFunction } from 'express';
import PuzzleRepo from '../../repository/base/puzzle.base';

import PuzzleController from '../base/puzzle.base';

interface ExpressPuzzleController extends PuzzleController {
	puzzleRepo: PuzzleRepo;
	getRandomPuzzleHandler: (
		req: Request,
		res: Response,
		next: NextFunction
	) => Promise<void>;
	getPuzzleByIdHandler: (
		req: Request,
		res: Response,
		next: NextFunction
	) => Promise<void>;
}

export default ExpressPuzzleController;
