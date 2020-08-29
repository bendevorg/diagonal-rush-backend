/**
 * Middleware to get user info
 * @module middlewares/userMiddleware
 *
 */

import { Request, Response, NextFunction } from 'express';
import User from '../models/Users';
import { NotFound } from '../errors';

export default async (req: Request, _res: Response, next: NextFunction) => {
  const id = req.token?.id;
  if (typeof id !== 'string') {
    return next();
  }

  let user;
  try {
    user = await User.findUser(id);
  } catch (err) {
    return next(err);
  }
  if (!user) {
    return next(new NotFound());
  }
  req.user = user;
  return next();
};
