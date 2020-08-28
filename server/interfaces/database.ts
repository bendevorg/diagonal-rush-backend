import { Query, Types, QueryFindBaseOptions, Document } from 'mongoose';

export interface IRead<T extends Document> {
  retrieve: (callback: (error: any, result: any) => void) => void;
  findById: (id: string, callback: (error: any, result: T) => void) => void;
  findOne(
    conditions: object,
    projection: any,
    options: { lean: true } & Omit<QueryFindBaseOptions, 'lean'>,
    callback?: (err: any, res: Document | null) => void,
  ): Query<Pick<T, '_id'>>;
  find(
    conditions: object,
    projection: any,
    options: { lean: true } & Omit<QueryFindBaseOptions, 'lean'>,
    callback?: (err: any, res: Document[] | null) => void,
  ): Query<Pick<T, '_id'>[]>;
}

export interface IWrite<T> {
  create: (item: T, callback: (error: any, result: any) => void) => void;
  update: (
    _id: Types.ObjectId,
    item: T,
    callback: (error: any, result: any) => void,
  ) => void;
  delete: (_id: string, callback: (error: any, result: any) => void) => void;
}
