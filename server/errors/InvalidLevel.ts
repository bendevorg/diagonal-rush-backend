import { errors } from '../constants';

export default class InvalidLevel extends Error {
  constructor(...args: any[]) {
    super(...args);
    this.name = errors.name.INVALID_LEVEL;
    Error.captureStackTrace(this, InvalidLevel);
  }
}
