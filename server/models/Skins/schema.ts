import { Schema } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
  },
  createdAt: {
    type: Date,
    required: false,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
});

export default schema;
