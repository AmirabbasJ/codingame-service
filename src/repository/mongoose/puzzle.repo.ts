import mongoose from 'mongoose';

import {
	MongoosePuzzleDoc,
	PuzzleModel,
} from '../../models/mongoose/puzzle.model';
import { MongoosePuzzleConfig } from '../../config/mongoose.config';
import { Logger } from '../../config';
import BaseMongoosePuzzleRepo from './puzzle.base';

class MongoosePuzzleRepo implements BaseMongoosePuzzleRepo {
	private logger: Logger;
	constructor(config: MongoosePuzzleConfig, logger: Logger) {
		this.logger = logger;
		this.connect(config);
	}

	public async connect(config: MongoosePuzzleConfig) {
		try {
			await mongoose.connect(config.url, config.options);
			this.logger.info('✅ successfully conected to mongodb codingame db');
		} catch (err) {
			this.logger.info('🥅 error occurred');
			this.logger.error(err);
		}
	}

	public async getPuzzleById(id: string) {
		const puzzle: MongoosePuzzleDoc = await PuzzleModel.findById(id);
		return puzzle;
	}

	public async getOneRandomPuzzle() {
		const randomPuzzles: MongoosePuzzleDoc[] = await PuzzleModel.aggregate([
			{ $sample: { size: 1 } },
		]);
		const [randomPuzzle] = randomPuzzles;

		return randomPuzzle;
	}
}

export default MongoosePuzzleRepo;
