import mongoose, { Document, Model } from 'mongoose';

import PuzzleSchema from './mongoosePuzzleSchema';
import Puzzle from './puzzleModel';

interface MongoosePuzzleDoc extends Puzzle, Document {
  id: string;
}

const PuzzleModel: Model<MongoosePuzzleDoc> = mongoose.model('puzzle', PuzzleSchema);

export { MongoosePuzzleDoc, PuzzleModel };
