import dotenv from 'dotenv';

import { Logger } from '../Infrastructures/Interfaces';

interface Config {
  port: number;
  dbUrl: string;
}

function getConfig(): Config {
  dotenv.config();

  return {
    dbUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/codingame',
    port: Number.parseInt(String(process.env.PORT), 10) || 3000,
  };
}

export { Config, getConfig, Logger };
