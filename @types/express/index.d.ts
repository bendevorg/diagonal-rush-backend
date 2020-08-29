import { IUserModel } from '../../server/interfaces/user';
import { IToken } from '../../server/interfaces/device';

declare global {
  namespace Express {
    interface Request {
      user: IUserModel;
      token: IToken;
    }
  }
}
