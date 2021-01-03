import mongoose from 'mongoose';

import {
	MongoosePuzzleDoc,
	PuzzleModel,
} from '../../models/mongoose/puzzle.model';
import { MongoosePuzzleConfig } from '../../config/mongoose.config';
import MongoosePuzzlesRepoBase from './puzzle.base';

class MongoosePuzzleRepo implements MongoosePuzzlesRepoBase {
	public async connect(config: MongoosePuzzleConfig) {
		try {
			await mongoose.connect(config.url, config.options);
			console.info('✅ successfully conected to mongodb codingame db');
		} catch (err) {
			console.info('🥅 error occurred');
			console.error(err);
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
