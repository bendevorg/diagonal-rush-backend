import { ISkinModel } from '../../interfaces/skin';
import SkinRepository from './repository';

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

  static retrieveSkinByName(name: string): Promise<ISkinModel | null> {
    const query = { name: { $gte: name } };
    const projection = ['name', 'displayName', 'price'];

    return new Promise<ISkinModel | null>((resolve, reject) => {
      const repository = new SkinRepository();
      repository.findOne(
        query,
        projection,
        { lean: true },
        (err, skin: ISkinModel | null) => {
          if (err) {
            return reject(err);
          }
          return resolve(skin);
        },
      );

      // console.info('blaublaublau', blau);
      // return blau;
    });
  }
}
