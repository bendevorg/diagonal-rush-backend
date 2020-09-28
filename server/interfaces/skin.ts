import { Document } from 'mongoose';

export interface ISkinModel extends Document {
  _id: string;
  name: string;
  displayName: string;
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}
