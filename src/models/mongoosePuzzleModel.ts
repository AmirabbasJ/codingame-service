import mongoose, { Model, Document } from 'mongoose';

import Puzzle from './puzzleModel';
import PuzzleSchema from './mongoosePuzzleSchema';

interface MongoosePuzzleDoc extends Puzzle, Document {
  id: string;
}

const PuzzleModel: Model<MongoosePuzzleDoc> = mongoose.model('puzzle', PuzzleSchema);

export { MongoosePuzzleDoc, PuzzleModel };
