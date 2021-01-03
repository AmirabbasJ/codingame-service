import Puzzle from '../../models/base/puzzle.base';

interface PuzzlesRepo {
	connect: (config: any) => Promise<void>;
	getOneRandomPuzzle: () => Promise<Puzzle>;
	getPuzzleById: (id: string) => Promise<Puzzle>;
}

export default PuzzlesRepo;
