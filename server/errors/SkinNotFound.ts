import { errors } from '../constants';

export default class SkinNotFound extends Error {
  constructor(...args: any[]) {
    super(...args);
    this.name = errors.name.SKIN_NOT_FOUND;
    Error.captureStackTrace(this, SkinNotFound);
  }
}
