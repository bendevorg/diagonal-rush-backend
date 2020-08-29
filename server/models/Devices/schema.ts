import { Schema } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: false,
  },
  graphics: {
    type: String,
    required: false,
  },
  processor: {
    type: String,
    required: false,
  },
  operatingSystem: {
    type: String,
    required: false,
  },
});

export default schema;
