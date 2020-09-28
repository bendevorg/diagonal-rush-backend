import { ISkinModel } from '../../interfaces/skin';
import UserRepository from './repository';

export default class Skin {
  static create(
    name: string,
    displayName: string,
    price: number,
  ): Promise<ISkinModel> {
    return new Promise<ISkinModel>((resolve, reject) => {
      const repository = new UserRepository();
      const skinData = <ISkinModel>{
        name,
        displayName,
        price,
      };

      repository.create(skinData, (err, skin) => {
        if (err) {
          return reject(err);
        }
        return resolve(skin);
      });
    });
  }

  static retrieveSkins(): Promise<ISkinModel> {
    return new Promise<ISkinModel>((resolve, reject) => {
      const repository = new UserRepository();
      repository.retrieve((err, skins: ISkinModel) => {
        if (err) {
          return reject(err);
        }
        return resolve(skins);
      });
    });
  }
}
