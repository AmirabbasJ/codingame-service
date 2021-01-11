import { Request, RequestHandler, Response } from 'express';
import { Inject } from 'typescript-ioc';

import PuzzleRepo from '../repository/puzzleRepo';
import PuzzleController from './puzzleController';

class ExpressPuzzleController implements PuzzleController {
  @Inject private puzzleRepo: PuzzleRepo;

  public getRandomPuzzleHandler: RequestHandler = async (
    _req: Request,
    res: Response,
  ): Promise<unknown> => {
    const randomPuzzle = await this.puzzleRepo.getOneRandomPuzzle();

    return res.json(randomPuzzle);
  };

  public getPuzzleByIdHandler: RequestHandler = async (
    req: Request,
    res: Response,
  ): Promise<unknown> => {
    const { id } = req.params;
    const puzzle = await this.puzzleRepo.getPuzzleById(id);
    return res.json(puzzle);
  };
}

export default ExpressPuzzleController;
