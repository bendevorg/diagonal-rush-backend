import { errors } from '../constants';

export default class InvalidCollectables extends Error {
  constructor(...args: any[]) {
    super(...args);
    this.name = errors.name.INVALID_COLLECTABLES;
    Error.captureStackTrace(this, InvalidCollectables);
  }
}
