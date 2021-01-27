import Puzzle from '../models/puzzleModel';

abstract class PuzzleRepo {
  connect: () => Promise<void>;
  getOneRandomPuzzle: () => Promise<Puzzle | null>;
  getPuzzleById: (id: string) => Promise<Puzzle | null>;
}

export default PuzzleRepo;
