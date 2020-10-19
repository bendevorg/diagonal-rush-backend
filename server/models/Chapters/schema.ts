import { Schema } from 'mongoose';
import LevelSchema from '../Levels/schema';

const schema = new Schema({
  order: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  levels: [LevelSchema],
  unlocked: {
    type: Boolean,
    required: true,
    default: false,
  },
  completed: {
    type: Boolean,
    required: true,
    default: false,
  },
});

export default schema;
