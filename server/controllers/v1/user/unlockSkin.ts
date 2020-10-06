/**
 * @api {PATCH} /user/unlock-skin PATCH Unlock skin
 * @apiName Unlock Skin
 * @apiGroup user
 * @apiVersion 0.0.1
 *
 * @apiParam {String} Example Example's body string
 * @apiParamExample {json} Request-example:
 * {
 *    name: "navi"
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
