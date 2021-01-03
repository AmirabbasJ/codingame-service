import mongoose, { Model, Document } from 'mongoose';

import { Puzzle } from '../base';
import PuzzleSchema from './schema/puzzle.schema';

interface MongoosePuzzleDoc extends Puzzle, Document {
	id: string;
}

const PuzzleModel: Model<MongoosePuzzleDoc> = mongoose.model(
	'puzzle',
	PuzzleSchema
);

export { MongoosePuzzleDoc, PuzzleModel };
