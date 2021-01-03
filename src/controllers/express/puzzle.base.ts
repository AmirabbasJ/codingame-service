import { Request, Response, NextFunction } from 'express';

import PuzzleController from '../base/puzzle.base';

interface ExpressPuzzleController extends PuzzleController {
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
