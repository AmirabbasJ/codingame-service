import { ConstantConfiguration, ContainerConfiguration } from 'typescript-ioc';

import ExpressPuzzleController from '../controllers/expressPuzzleController';
import { PuzzleController } from '../controllers/puzzleController';
import { ConsoleLogger } from '../Infrastructures/logger/ConsoleLogger';
import { MongoosePuzzleRepo } from '../repository/mongoosePuzzleRepo';
import PuzzleRepo from '../repository/puzzleRepo';
import { getConfig, Logger } from '.';

type ContainerConfig = (ConstantConfiguration | ContainerConfiguration)[];

export function createContainer(): ContainerConfig {
  return [
    { bindName: 'config', to: getConfig() },
    { bind: Logger, to: ConsoleLogger },
    { bind: PuzzleRepo, to: MongoosePuzzleRepo },
    { bind: PuzzleController, to: ExpressPuzzleController },
  ];
}
