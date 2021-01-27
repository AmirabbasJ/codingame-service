import express, { Express, Router } from 'express';
import { Inject, InjectValue } from 'typescript-ioc';

import { Config, Logger } from './config';
import { PuzzleController } from './controllers/puzzleController';
import PuzzleRepo from './repository/puzzleRepo';

class ExpressApp {
  @InjectValue('config') private config: Config;
  @Inject private puzzleRepo: PuzzleRepo;
  @Inject private puzzleController: PuzzleController;
  @Inject private logger: Logger;
  private app: Express;

  constructor() {
    this.app = express();
  }

  public init() {
    this.puzzleRepo.connect();

    const puzzleRouter: Router = Router();
    puzzleRouter.get('/random', this.puzzleController.getRandomPuzzleHandler);
    puzzleRouter.get('/:id', this.puzzleController.getPuzzleByIdHandler);

    this.app.use('/api/v1/puzzle', puzzleRouter);

    return this;
  }

  public listen() {
    this.app.listen(this.config.port, () => {
      this.logger.log(`listening on port ${this.config.port}`);
    });

    return this;
  }
}

export { ExpressApp };
