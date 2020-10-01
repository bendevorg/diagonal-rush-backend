/**
 * @api {POST} /skins POST Create skin
 * @apiName New skin
 * @apiGroup skin
 * @apiVersion 0.0.1
 *
 * @apiParam {String} Example Example's body string
 * @apiParamExample {json} Request-example:
 * {
 *  "id": "01aeho",
 *  "name": "de_besa",
 *  "displayName": "de besa",
 *  "price": 50
 * }
 * 
 * @apiSuccess (200) {String}
 * @apiSuccessExample {json} Success-Response:
 * {
 *   "id": "01aeho",
 *   "name": "de_besa",
 *   "displayName": "de besa",
 *   "price": 50
 * }
 * @apiError (400) {String} msg Error message.
 * @apiErrorExample {json} Error-Response:
   {
     "data": "An unexpected error occurred while processing your request."
   }
 *
 */

import { Request, Response, NextFunction } from 'express';
import Skins from '../../../models/Skins';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { name, displayName, price } = req.body;
  let skin;
  try {
    skin = await Skins.create(name, displayName, price);
  } catch (err) {
    return next(err);
  }
  return res.status(200).json(skin);
};
