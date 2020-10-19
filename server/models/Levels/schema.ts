import { Schema } from 'mongoose';

const schema = new Schema({
  order: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
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
  collectables: {
    type: Number,
    required: true,
    default: 0,
  },
  collectablesAcquired: {
    type: Number,
    required: true,
    default: 0,
  },
});

export default schema;
