/**
 * Module to handle errors
 * @module middlewares/errorMiddleware
 */

/**
 * Handle all errors in our app. Must call next(err) on a controller to be used
 *
 */

import { Request, Response, NextFunction } from 'express';
import logger from 'log-champ';
import { errors, messages } from '../constants';

// eslint-disable-next-line
export default (
  err: Error | any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  switch (err.name) {
    case errors.name.VALIDATION_ERROR:
      return res.status(400).json({
        data: err.details[0].message,
      });
    case errors.name.DOCUMENT_NOT_FOUND_ERROR:
      return res.status(404).json();
    case errors.name.NOT_FOUND:
      return res.status(404).json();
    case errors.name.INVALID_AUTH:
      return res.status(403).json();
    case errors.name.INVALID_CHAPTER:
      return res.status(400).json();
    case errors.name.INVALID_COLLECTABLES:
      return res.status(400).json();
    case errors.name.INVALID_LEVEL:
      return res.status(400).json();
    case errors.name.SKIN_NOT_FOUND:
      return res.status(404).json();
    case errors.name.INSUFFICIENT_FUNDS:
      return res.status(400).json();
    default:
      logger.error(err);
      return res.status(500).json({
        data: messages.error.UNEXPECTED_RUNNING,
      });
  }
};
