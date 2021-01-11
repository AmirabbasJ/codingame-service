/* eslint-disable no-console */
import { Logger } from '../config';

export class ConsoleLogger implements Logger {
  log(...args: any[]) {
    console.log(...args);
  }

  info(...args: any[]) {
    console.info(...args);
  }

  warn(...args: any[]) {
    console.warn(...args);
  }

  error(...args: any[]) {
    console.error(...args);
  }
}
