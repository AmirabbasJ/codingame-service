interface MongoosePuzzleConfig {
	url: string;
}

const mongoosePuzzleConfig: MongoosePuzzleConfig = {
	url: process.env.MONGODB_URL || 'mongodb://localhost:27017/codingame',
};

export { MongoosePuzzleConfig, mongoosePuzzleConfig };
