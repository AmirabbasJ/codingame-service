import PuzzleRepo from '../../repository/base/puzzle.base';

interface PuzzleController {
	readonly puzzleRepo: PuzzleRepo;

	getRandomPuzzleHandler: (...arg: any[]) => any;
	getPuzzleByIdHandler: (...arg: any[]) => any;
}

export default PuzzleController;
