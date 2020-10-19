import { Document } from 'mongoose';
import { IDevice } from './device';
import { IChapter } from './chapter';
import { ISkin } from './skin';

export interface IUserModel extends Document {
  _id: string;
  device: IDevice;
  points: number;
  chapters: Array<IChapter>;
  unlockedSkins: Array<ISkin>;
  createdAt?: Date;
  updatedAt?: Date;
  completeLevel: (
    chapterIndex: number,
    levelIndex: number,
    collectables: number,
  ) => Promise<IUserModel>;
  addPoints: (amount: number) => Promise<IUserModel>;
}

export interface IUserPublicData {
  points: number;
  chapters: Array<IChapter>;
  unlockedSkins: Array<ISkin>;
}
