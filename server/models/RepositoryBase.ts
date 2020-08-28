import { Document, Model, Types, Query, QueryFindBaseOptions } from 'mongoose';
import { IRead, IWrite } from '../interfaces/database';

export default class Repository<T extends Document>
  implements IRead<T>, IWrite<T> {
  private _model: Model<Document>;

  constructor(schemaModel: Model<Document>) {
    this._model = schemaModel;
  }

  create(item: T, callback: (error: any, result: T) => void) {
    this._model.create(item, callback);
  }

  retrieve(callback: (error: any, result: T) => void) {
    this._model.find({}, callback);
  }

  update(
    _id: Types.ObjectId,
    item: T,
    callback: (error: any, result: any) => void,
  ) {
    this._model.update({ _id }, item, callback);
  }

  delete(_id: string, callback: (error: any, result: any) => void) {
    this._model.remove({ _id: this.toObjectId(_id) }, (err) =>
      callback(err, null),
    );
  }

  findById(_id: string, callback: (error: any, result: T) => void) {
    this._model.findById(_id, callback);
  }

  findOne(
    conditions: object,
    projection: any,
    options: { lean: true } & Omit<QueryFindBaseOptions, 'lean'>,
    callback?: (err: any, res: Document | null) => void,
  ): Query<Pick<T, '_id'>> {
    return this._model.findOne(conditions, projection, options, callback);
  }

  find(
    conditions: object,
    projection: any,
    options: { lean: true } & Omit<QueryFindBaseOptions, 'lean'>,
    callback?: (err: any, res: Document[] | null) => void,
  ): Query<Pick<T, '_id'>[]> {
    return this._model.find(conditions, projection, options, callback);
  }

  private toObjectId(_id: string): Types.ObjectId {
    return Types.ObjectId.createFromHexString(_id);
  }
}
