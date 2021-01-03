import { Puzzle } from '../../models/base';

interface PuzzlesRepo<Record extends Puzzle, Config> {
	connect: (config?: Config) => Promise<void>;
	getOneRandomPuzzle: () => Promise<Record>;
	getPuzzleById: (id: string) => Promise<Record>;
}

export default PuzzlesRepo;
