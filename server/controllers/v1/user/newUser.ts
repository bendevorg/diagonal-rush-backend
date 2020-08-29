/**
 * @api {POST} /user POST Create user
 * @apiName New user
 * @apiGroup user
 * @apiVersion 0.0.1
 *
 * @apiParam {String} Example Example's body string
 * @apiParamExample {json} Request-example:
 * {
 * }
 * @apiSuccess (200) {String} user Hey.
 * @apiSuccessExample {json} Success-Response:
    { "data": "Hey!" }
 * @apiError (400) {String} msg Error message.
 * @apiErrorExample {json} Error-Response:
    { "data": "example is missing or is not correctly formatted." }
  *
 */

import { Request, Response, NextFunction } from 'express';
import User from '../../../models/Users';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { id, device } = req.token;
  let user;
  try {
    user = await User.create(id, device);
  } catch (err) {
    return next(err);
  }
  return res.status(200).json(user);
};
