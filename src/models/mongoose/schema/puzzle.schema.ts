/* eslint-disable @typescript-eslint/naming-convention */
import mongoose from 'mongoose';

import TestSchema from './test.schema';

const PuzzleSchema = new mongoose.Schema(
	{
		_id: String,
		id: String,
		title: String,
		fastest: Boolean,
		reverse: Boolean,
		shortest: Boolean,
		statement: String,
		testCases: [TestSchema],
		constraints: String,
		stubGenerator: String,
		inputDescription: String,
		outputDescription: String,
	},
	{ _id: false }
);

export default PuzzleSchema;
