import express, { Express, Router } from 'express';
import { Config } from './config';
import PuzzleController from './controllers/puzzleController';

interface App {
	listen: () => void;
}

class ExpressApp implements App {
	private app: Express;
	private config: Config;
	private controller: PuzzleController;
	constructor(puzzleController: PuzzleController, config: Config) {
		this.app = express();
		this.config = config;
		this.controller = puzzleController;

		const puzzleRouters = this.getPuzzlesRouter();
		this.app.use('/api/v1/puzzle', puzzleRouters);
	}

	private getPuzzlesRouter() {
		const puzzleRouter: Router = Router();

		puzzleRouter.get('/random', this.controller.getRandomPuzzleHandler);
		puzzleRouter.get('/:id', this.controller.getPuzzleByIdHandler);

		return puzzleRouter;
	}

	public listen() {
		this.app.listen(this.config.port, () => {
			this.config.logger.log(`listening on port ${this.config.port}`);
		});
	}
}

export { ExpressApp, App };
