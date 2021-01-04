import { Request, Response } from 'express';
import PuzzleRepo from '../../repository/base/puzzle.base';
import BaseExpressPuzzleController from './puzzle.base';

class ExpressPuzzleController implements BaseExpressPuzzleController {
	readonly puzzleRepo: PuzzleRepo;
	constructor(puzzleRepos: PuzzleRepo) {
		this.puzzleRepo = puzzleRepos;
	}

	public async getRandomPuzzleHandler(
		_req: Request,
		res: Response
	): Promise<unknown> {
		const randomPuzzle = await this.puzzleRepo.getOneRandomPuzzle();
		return res.json(randomPuzzle);
	}

	public async getPuzzleByIdHandler(
		req: Request,
		res: Response
	): Promise<unknown> {
		const { id } = req.params;
		const puzzle = await this.puzzleRepo.getPuzzleById(id);
		return res.json(puzzle);
	}
}

export default ExpressPuzzleController;
