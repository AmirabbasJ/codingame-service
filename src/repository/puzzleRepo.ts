import Puzzle from '../models/puzzleModel';

abstract class PuzzleRepo {
  connect: (config: any) => Promise<void>;
  getOneRandomPuzzle: () => Promise<Puzzle | null>;
  getPuzzleById: (id: string) => Promise<Puzzle | null>;
}

export default PuzzleRepo;
