/**
 * Middleware to restrict calls with valid token
 * @module middlewares/tokenValidationMiddleware
 *
 */

import { Request, Response, NextFunction } from 'express';
import rsaDecryptor from '../utils/rsaDecryptor';
import { headers, values, cryptography } from '../constants';
import { InvalidAuth } from '../errors';

export default async (req: Request, _res: Response, next: NextFunction) => {
  const authorizationToken = req.headers[headers.authorization];
  if (!req.headers || typeof authorizationToken !== 'string') {
    return next(new InvalidAuth());
  }
  const tokenData = rsaDecryptor(
    authorizationToken,
    cryptography.RSA_PRIVATE_KEY,
  );
  if (!tokenData) {
    return next(new InvalidAuth());
  }
  const currentDate = Date.now() + values.TIMEZONE_IN_MS;
  const tokenAge = currentDate - Date.parse(tokenData.date);
  if (tokenAge > values.TOKEN_MAX_AGE_IN_MS) {
    return next(new InvalidAuth());
  }
  req.token = tokenData;
  return next();
};
