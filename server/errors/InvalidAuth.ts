import { errors } from '../constants';

export default class InvalidAuth extends Error {
  constructor(...args: any[]) {
    super(...args);
    this.name = errors.name.INVALID_AUTH;
    Error.captureStackTrace(this, InvalidAuth);
  }
}
