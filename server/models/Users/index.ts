import { IUserModel } from '../../interfaces/user';
import { IDevice } from '../../interfaces/device';
import UserRepository from './repository';

export default class User {
  private user: IUserModel;

  constructor(_user: IUserModel) {
    this.user = _user;
  }

  get device(): IDevice {
    return this.user.device;
  }

  get points(): number {
    return this.user.points;
  }

  static create(_id: string, device: IDevice): Promise<IUserModel> {
    return new Promise<IUserModel>((resolve, reject) => {
      const repository = new UserRepository();
      const userData = <IUserModel>{
        _id,
        device,
        points: 0,
      };

      repository.create(userData, (err, user) => {
        if (err) {
          return reject(err);
        }
        return resolve(user);
      });
    });
  }

  static findUser(_id: string): Promise<IUserModel> {
    return new Promise<IUserModel>((resolve, reject) => {
      const repository = new UserRepository();
      repository.findById(_id, (err, user: IUserModel) => {
        if (err) {
          return reject(err);
        }
        return resolve(user);
      });
    });
  }
}
