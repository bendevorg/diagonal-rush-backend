/**
 * @api {POST} /user/reward POST Give reward
 * @apiName Give reward
 * @apiGroup user
 * @apiVersion 0.0.1
 *
 * @apiParam {String} Example Example's body string
 * @apiParamExample {json} Request-example:
 * {
 *    user_id: asdhj213-sad0123,
 *    reward_amount: 1
 * }
 * @apiSuccess (200) {String} user Hey.
 * @apiSuccessExample {json} Success-Response:
    {}
 * @apiError (400) {String} msg Error message.
 * @apiErrorExample {json} Error-Response:
    { "data": "example is missing or is not correctly formatted." }
  *
 */

import { Request, Response, NextFunction } from 'express';
import User from '../../../models/Users';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { user_id, reward_amount } = req.query;
  try {
    // @ts-ignore
    await User.findUser(user_id).addPoints(reward_amount);
  } catch (err) {
    return next(err);
  }
  return res.status(200).json();
};
