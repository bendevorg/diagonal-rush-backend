import { Document } from 'mongoose';
import { IDevice } from './device';
import { IChapter } from './chapter';

export interface IUserModel extends Document {
  _id: string;
  device: IDevice;
  points: number;
  chapters: Array<IChapter>;
  createdAt?: Date;
  updatedAt?: Date;
}
