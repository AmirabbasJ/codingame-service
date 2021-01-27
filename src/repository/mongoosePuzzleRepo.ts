import mongoose from 'mongoose';
import { Inject, InjectValue } from 'typescript-ioc';

import { Config, Logger } from '../config';
import { MongoosePuzzleDoc, PuzzleModel } from '../models/mongoosePuzzleModel';
import PuzzleRepo from './puzzleRepo';

export class MongoosePuzzleRepo implements PuzzleRepo {
  @Inject private logger: Logger;
  @InjectValue('config') private config: Config;

  public async connect(): Promise<void> {
    try {
      await mongoose.connect(this.config.dbUrl, {
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
    if (!randomPuzzle) {
      return null;
    }
    return randomPuzzle;
  }
}
