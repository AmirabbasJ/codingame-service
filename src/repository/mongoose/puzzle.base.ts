import PuzzleRepo from '../base/puzzle.base';
import { MongoosePuzzleDoc } from '../../models/mongoose/puzzle.model';
import { MongoosePuzzleConfig } from '../../config/mongoose.config';

interface MongoosePuzzlesRepoBase extends PuzzleRepo {
	connect: (config: MongoosePuzzleConfig) => Promise<void>;
	getOneRandomPuzzle: () => Promise<MongoosePuzzleDoc>;
	getPuzzleById: (id: string) => Promise<MongoosePuzzleDoc>;
}

export default MongoosePuzzlesRepoBase;
