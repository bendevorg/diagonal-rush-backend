import User from '../../server/models/Users';
import { IToken } from '../../server/interfaces/device';

declare global {
  namespace Express {
    interface Request {
      user: User;
      token: IToken;
    }
  }
}
