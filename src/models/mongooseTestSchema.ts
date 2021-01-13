import mongoose from 'mongoose';

const TestSchema = new mongoose.Schema({
  title: String,
  isTest: Boolean,
  testIn: String,
  testOut: String,
  isValidator: Boolean,
});

export default TestSchema;
