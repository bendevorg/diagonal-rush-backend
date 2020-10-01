import { Document } from 'mongoose';

export interface ISkin {
  name: string;
  displayName: string;
}

export interface ISkinModel extends ISkin, Document {
  price: number;
  createdAt?: Date;
  updatedAt?: Date;
}
