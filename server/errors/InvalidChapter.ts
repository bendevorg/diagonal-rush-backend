import { errors } from '../constants';

export default class InvalidChapter extends Error {
  constructor(...args: any[]) {
    super(...args);
    this.name = errors.name.INVALID_CHAPTER;
    Error.captureStackTrace(this, InvalidChapter);
  }
}
