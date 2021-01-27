import dotenv from 'dotenv';

import { Logger } from '../Infrastructures/logger';

interface Config {
  dbUrl: string;
  port: number;
}

function getEnv(envName: string, defaultEnv?: string): string {
  const env = process.env[envName] ?? defaultEnv;
  if (env == null) throw Error(`undefined envirement varible: ${envName}`);
  return env;
}

function getConfig(): Config {
  dotenv.config();

  return {
    dbUrl: getEnv('MONGODB_URL', 'mongodb://localhost:27017/codit'),
    port: Number.parseInt(getEnv('PORT'), 10),
  };
}

export { Config, getConfig, Logger };
