import mongoose from 'mongoose';

import { MongoosePuzzleDoc, PuzzleModel } from '../models/mongoosePuzzleModel';
import { Config, Logger } from '../config';

import PuzzleRepo from './puzzleRepo';

class MongoosePuzzleRepo implements PuzzleRepo {
	private logger: Logger;
	constructor(config: Config) {
		this.logger = config.logger;
		this.connect(config);
	}

	public async connect(config: Config): Promise<void> {
		try {
			await mongoose.connect(config.dbUrl, {
				useNewUrlParser: true,
				useUnifiedTopology: true,
			});
			this.logger.info('✅ successfully conected to mongodb codingame db');
		} catch (err) {
			this.logger.info('🥅 error occurred');
			this.logger.error(err);
		}
	}

	public async getPuzzleById(id: string): Promise<MongoosePuzzleDoc | null> {
		const puzzle: MongoosePuzzleDoc | null = await PuzzleModel.findById(id);
		return puzzle;
	}

	public async getOneRandomPuzzle(): Promise<MongoosePuzzleDoc | null> {
		const randomPuzzles: MongoosePuzzleDoc[] = await PuzzleModel.aggregate([
			{ $sample: { size: 1 } },
		]);
		const [randomPuzzle] = randomPuzzles;

		return randomPuzzle;
	}
}

export default MongoosePuzzleRepo;
