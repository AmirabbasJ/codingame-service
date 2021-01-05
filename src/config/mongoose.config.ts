import { ConnectOptions } from 'mongoose';

interface MongoosePuzzleConfig {
	url: string;
	options: ConnectOptions;
}

const mongoosePuzzleConfig: MongoosePuzzleConfig = {
	url: process.env.MONGODB_URL || 'mongodb://localhost:27017/codingame',
	options: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
};

export { MongoosePuzzleConfig, mongoosePuzzleConfig };
