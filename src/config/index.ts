import dotenv from 'dotenv';

dotenv.config();

interface Logger {
	log: (...args: any[]) => void;
	info: (...args: any[]) => void;
	error: (...args: any[]) => void;
}

interface Config {
	port: number;
	dbUrl: string;
	logger: Logger;
}

const config: Config = {
	dbUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/codingame',
	logger: console,
	port: Number.parseInt(String(process.env.PORT), 10) || 3000,
};

export { Logger, config, Config };
