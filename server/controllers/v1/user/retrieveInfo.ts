/**
 * @api {GET} /user GET User info
 * @apiName Retrieve Info
 * @apiGroup user
 * @apiVersion 0.0.1
 * 
 * @apiSuccess (200) {String} _id User id.
 * @apiSuccess (200) {String} device Device info.
 * @apiSuccess (200) {String} device.name Device name.
 * @apiSuccessExample {json} Success-Response:
    {"_id": "ID", "device": {"name": "Galaxy S20"}}
 *
 */

import { Request, Response } from 'express';

export default (req: Request, res: Response) => {
  return res.status(200).json(req.user);
};
