import PuzzleRepo from '../base/puzzle.base';
import { MongoosePuzzleDoc } from '../../models/mongoose/puzzle.model';
import { MongoosePuzzleConfig } from '../../config/mongoose.config';

interface BaseMongoosePuzzleRepo extends PuzzleRepo {
	connect: (config: MongoosePuzzleConfig) => Promise<void>;
	getOneRandomPuzzle: () => Promise<MongoosePuzzleDoc | null>;
	getPuzzleById: (id: string) => Promise<MongoosePuzzleDoc | null>;
}

export default BaseMongoosePuzzleRepo;
