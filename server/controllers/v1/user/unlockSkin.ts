/**
 * @api {PATCH} /user/level-completed POST Create user
 * @apiName Complete level
 * @apiGroup user
 * @apiVersion 0.0.1
 *
 * @apiParam {String} Example Example's body string
 * @apiParamExample {json} Request-example:
 * {
 *    chapter: 0,
 *    level: 1,
 *    collectables: 3
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

export default async (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  try {
    await req.user.unlockSkin(name);
  } catch (err) {
    return next(err);
  }
  return res.status(200).json();
};
