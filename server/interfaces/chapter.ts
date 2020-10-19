import { ILevel } from './level';

export interface IChapter {
  order: number;
  name: string;
  levels: Array<ILevel>;
  unlocked: boolean;
  completed: boolean;
}
