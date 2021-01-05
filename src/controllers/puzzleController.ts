import PuzzleRepo from '../repository/puzzleRepo';

interface PuzzleController {
	puzzleRepo: PuzzleRepo;

	getRandomPuzzleHandler: (...arg: any[]) => any;
	getPuzzleByIdHandler: (...arg: any[]) => any;
}

export default PuzzleController;
