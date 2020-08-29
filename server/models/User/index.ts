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
      const user = <IUserModel>{
        _id,
        device,
        points: 0,
      };

      repository.create(user, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  // static findById()

  // static findHero(name: string): Promise.IThenable<IHeroModel> {
  //   let p = new Promise((resolve, reject) => {
  //     let repo = new HeroRepository();

  //     repo
  //       .find({ name: name })
  //       .sort({ createdAt: -1 })
  //       .limit(1)
  //       .exec((err, res) => {
  //         if (err) {
  //           reject(err);
  //         } else {
  //           if (res.length) {
  //             resolve(res[0]);
  //           } else {
  //             resolve(null);
  //           }
  //         }
  //       });
  //   });

  //   return p;
  // }
}
