import { ISkinModel } from '../../interfaces/skin';
import UserRepository from './repository';

export default class Skin {
  static create(
    _id: string,
    name: string,
    displayName: string,
    price: number,
  ): Promise<ISkinModel> {
    return new Promise<ISkinModel>((resolve, reject) => {
      const repository = new UserRepository();
      const skinData = <ISkinModel>{
        _id,
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
}
