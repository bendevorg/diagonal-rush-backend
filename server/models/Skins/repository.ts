import database from '../database';
import SkinSchema from './schema';
import { ISkinModel } from '../../interfaces/skin';
import RepositoryBase from '../RepositoryBase';

const SkinModel = database.model<ISkinModel>('skin', SkinSchema, 'skins');

export default class SkinRepository extends RepositoryBase<ISkinModel> {
  constructor() {
    super(SkinModel);
  }
}
