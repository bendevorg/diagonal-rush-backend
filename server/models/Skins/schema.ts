import { Schema } from 'mongoose';

const schema = new Schema({
  _id: {
    type: String,
    required: true,
  },
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
    required: true,
  },
});

export default schema;
