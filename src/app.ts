import express, { Express, Router } from 'express';
import { Inject, InjectValue } from 'typescript-ioc';

import { Config, Logger } from './config';
import { PuzzleController } from './controllers/puzzleController';

interface App {
  listen: () => void;
}

class ExpressApp implements App {
  @InjectValue('config') private config: Config;
  @Inject private puzzleController: PuzzleController;
  @Inject private logger: Logger;
  private app: Express;

  constructor() {
    this.app = express();
    const puzzleRouters = this.getPuzzlesRouter();
    this.app.use('/api/v1/puzzle', puzzleRouters);
  }

  private getPuzzlesRouter() {
    const puzzleRouter: Router = Router();
    this.logger.log('X');

    puzzleRouter.get('/random', this.puzzleController.getRandomPuzzleHandler);
    puzzleRouter.get('/:id', this.puzzleController.getPuzzleByIdHandler);

    return puzzleRouter;
  }

  public listen() {
    this.app.listen(this.config.port, () => {
      this.logger.log(`listening on port ${this.config.port}`);
    });
  }
}

export { App, ExpressApp };
