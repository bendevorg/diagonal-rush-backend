import { Document } from 'mongoose';
import { IDevice } from './device';

export interface IUserModel extends Document {
  _id: string;
  device: IDevice;
  points: number;
  createdAt?: Date;
  updatedAt?: Date;
}
