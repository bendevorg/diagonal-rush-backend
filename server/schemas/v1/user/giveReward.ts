import joi from 'joi';
import { Request, Response, NextFunction } from 'express';

const schema = joi
  .object()
  .keys({
    user_id: joi.string().required(),
    reward_amount: joi.number().required(),
  })
  .unknown(true);

export default (req: Request, _res: Response, next: NextFunction) => {
  const { error }: joi.ValidationResult = schema.validate(req.query);
  if (!error) {
    return next();
  }
  return next(error);
};
