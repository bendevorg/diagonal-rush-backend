import database from '../database';
import UserSchema from './schema';
import { IUserModel } from '../../interfaces/user';
import RepositoryBase from '../RepositoryBase';

const UserModel = database.model<IUserModel>('user', UserSchema, 'users');

export default class UserRepository extends RepositoryBase<IUserModel> {
  constructor() {
    super(UserModel);
  }
}
