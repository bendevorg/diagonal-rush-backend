import { Schema } from 'mongoose';
import DeviceSchema from '../Devices/schema';
import { IUserModel } from '../../interfaces/user';

const schema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  device: {
    type: DeviceSchema,
    required: true,
  },
  points: {
    type: Number,
    required: false,
    default: 0,
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

schema.pre<IUserModel>('save', function pre(next) {
  if (this.isNew) {
    this.createdAt = new Date();
  } else {
    this.updatedAt = new Date();
  }
  next();
});

export default schema;
