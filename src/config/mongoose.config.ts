import { ConnectOptions } from 'mongoose';

interface MongoosePuzzleConfig {
	url: string;
	options: ConnectOptions;
}

const mongoosePuzzleConfig: MongoosePuzzleConfig = {
	url: process.env.MONGODB_URL,
	options: {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
};

export { MongoosePuzzleConfig, mongoosePuzzleConfig };
