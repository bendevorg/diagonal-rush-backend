import { errors } from '../constants';

export default class InsufficientFunds extends Error {
  constructor(...args: any[]) {
    super(...args);
    this.name = errors.name.INSUFFICIENT_FUNDS;
    Error.captureStackTrace(this, InsufficientFunds);
  }
}
