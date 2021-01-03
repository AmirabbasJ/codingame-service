import PuzzlesRepo from '../../repository/base/puzzle.base';

interface PuzzleController {
	puzzleRepo: PuzzlesRepo;

	getRandomPuzzleHandler: (...arg: any[]) => any;
	getPuzzleByIdHandler: (...arg: any[]) => any;
}

export default PuzzleController;
