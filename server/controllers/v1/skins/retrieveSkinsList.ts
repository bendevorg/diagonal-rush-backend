/**
 * @api {GET} /skins GET Skins list
 * @apiName retrieve Skins
 * @apiGroup skins
 * @apiVersion 0.0.1
 * 
 * @apiSuccess (200) {String} skins data.
 * @apiSuccessExample {json} Success-Response:
  [
    {
        "_id": "01aeho",
        "name": "de_besa",
        "displayName": "de besa",
        "price": 50,
        "__v": 0
    },
    {
        "_id": "02aeho",
        "name": "estas",
        "displayName": "estas",
        "price": 25,
        "__v": 0
    }
  ]

 */

import { Request, Response } from 'express';
import Skins from '../../../models/Skins';

export default async (_req: Request, res: Response) => {
  let skins;

  try {
    skins = await Skins.retrieveSkins();
  } catch (err) {
    return err;
  }
  return res.status(200).json(skins);
};
