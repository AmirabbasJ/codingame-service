interface Logger {
	log: (...args: any[]) => void;
	info: (...args: any[]) => void;
	error: (...args: any[]) => void;
}

const logger: Logger = console;

export { Logger, logger };
