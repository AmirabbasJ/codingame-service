import Puzzle from '../../models/base/puzzle.base';

interface PuzzlesRepo {
	connect: (config: unknown) => Promise<void>;
	getOneRandomPuzzle: () => Promise<Puzzle>;
	getPuzzleById: (id: string) => Promise<Puzzle>;
}

export default PuzzlesRepo;
