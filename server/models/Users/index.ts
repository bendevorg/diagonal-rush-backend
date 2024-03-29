import { IUserModel, IUserPublicData } from '../../interfaces/user';
import { IDevice } from '../../interfaces/device';
import { IChapter } from '../../interfaces/chapter';
import Skins from '../Skins';
import { ISkinModel } from '../../interfaces/skin';
import UserRepository from './repository';
import {
  InvalidChapter,
  InvalidLevel,
  InvalidCollectables,
  InsufficientFunds,
} from '../../errors';

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

  get chapters(): Array<IChapter> {
    return this.user.chapters;
  }

  get publicData(): IUserPublicData {
    return {
      points: this.user.points,
      chapters: this.user.chapters,
      unlockedSkins: this.user.unlockedSkins,
    };
  }

  completeLevel(
    chapterIndex: number,
    levelIndex: number,
    collectables: number,
  ): Promise<IUserModel> {
    return new Promise<IUserModel>((resolve, reject) => {
      if (
        chapterIndex < 0 ||
        this.user.chapters.length <= chapterIndex ||
        !this.user.chapters[chapterIndex].unlocked
      ) {
        return reject(new InvalidChapter());
      }

      if (
        levelIndex < 0 ||
        this.user.chapters[chapterIndex].levels.length <= levelIndex ||
        !this.user.chapters[chapterIndex].levels[levelIndex].unlocked
      ) {
        return reject(new InvalidLevel());
      }

      if (
        collectables < 0 ||
        collectables >
          this.user.chapters[chapterIndex].levels[levelIndex].collectables
      ) {
        return reject(new InvalidCollectables());
      }

      this.user.chapters[chapterIndex].levels[levelIndex].completed = true;
      if (
        collectables >
        this.user.chapters[chapterIndex].levels[levelIndex].collectablesAcquired
      ) {
        this.user.points +=
          collectables -
          this.user.chapters[chapterIndex].levels[levelIndex]
            .collectablesAcquired;
        this.user.chapters[chapterIndex].levels[
          levelIndex
        ].collectablesAcquired = collectables;
      }

      if (levelIndex === this.user.chapters[chapterIndex].levels.length - 1) {
        this.user.chapters[chapterIndex].completed = true;
        if (chapterIndex < this.user.chapters.length - 1) {
          this.user.chapters[chapterIndex + 1].unlocked = true;
          this.user.chapters[chapterIndex + 1].levels[0].unlocked = true;
        }
      } else {
        this.user.chapters[chapterIndex].levels[levelIndex + 1].unlocked = true;
      }

      return this.user
        .save()
        .then((user) => resolve(user))
        .catch((err) => reject(err));
    });
  }

  addPoints(amount: number): Promise<IUserModel> {
    return new Promise<IUserModel>((resolve, reject) => {
      this.user.points += amount;
      return this.user
        .save()
        .then((user) => resolve(user))
        .catch((err) => reject(err));
    });
  }

  unlockSkin(name: string): Promise<IUserModel> {
    return new Promise<IUserModel>(async (resolve, reject) => {
      let skin: ISkinModel;
      try {
        skin = await Skins.retrieveSkinByName(name);
      } catch (err) {
        return reject(err);
      }

      if (this.user.points < skin.price) {
        return reject(new InsufficientFunds());
      }
      this.user.points -= skin.price;
      this.user.unlockedSkins.push(skin);

      return this.user
        .save()
        .then((user) => resolve(user))
        .catch((err) => reject(err));
    });
  }

  static create(_id: string, device: IDevice): Promise<IUserModel> {
    return new Promise<IUserModel>((resolve, reject) => {
      const repository = new UserRepository();
      const userData = <IUserModel>{
        _id,
        device,
        points: 0,
      };

      return repository
        .create(userData)
        .then((user) => resolve(user))
        .catch((err) => reject(err));
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
