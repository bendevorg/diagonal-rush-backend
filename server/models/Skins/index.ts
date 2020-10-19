import { ISkinModel } from '../../interfaces/skin';
import SkinRepository from './repository';
import { SkinNotFound } from '../../errors';

export default class Skin {
  static create(
    name: string,
    displayName: string,
    price: number,
  ): Promise<ISkinModel> {
    return new Promise<ISkinModel>((resolve, reject) => {
      const repository = new SkinRepository();
      const skinData = <ISkinModel>{
        name,
        displayName,
        price,
      };

      return repository
        .create(skinData)
        .then((skin) => resolve(skin))
        .catch((err) => reject(err));
    });
  }

  static retrieveSkins(): Promise<ISkinModel> {
    return new Promise<ISkinModel>((resolve, reject) => {
      const repository = new SkinRepository();
      repository.retrieve((err, skins: ISkinModel) => {
        if (err) {
          return reject(err);
        }
        return resolve(skins);
      });
    });
  }

  static retrieveSkinByName(thisName: string): Promise<ISkinModel> {
    const query = { name: thisName };
    const projection = ['name', 'displayName', 'price'];

    return new Promise<ISkinModel>((resolve, reject) => {
      const repository = new SkinRepository();
      repository.findOne(
        query,
        projection,
        { lean: true },
        (err, skin: ISkinModel | null) => {
          if (err) {
            return reject(err);
          }
          if (!skin) {
            return reject(new SkinNotFound());
          }
          return resolve(skin);
        },
      );
    });
  }
}
