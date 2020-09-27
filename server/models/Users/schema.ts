import { Schema } from 'mongoose';
import DeviceSchema from '../Devices/schema';
import ChapterSchema from '../Chapters/schema';
import { IUserModel } from '../../interfaces/user';

const schema = new Schema({
  _id: {
    type: String,
    required: true,
  },
  device: {
    type: DeviceSchema,
    required: true,
  },
  points: {
    type: Number,
    required: false,
    default: 0,
  },
  chapters: [ChapterSchema],
  createdAt: {
    type: Date,
    required: false,
  },
  updatedAt: {
    type: Date,
    required: false,
  },
});

schema.pre<IUserModel>('save', function pre(next) {
  if (this.isNew) {
    this.createdAt = new Date();
    //  Please improve me
    this.chapters = [
      {
        order: 0,
        name: 'Chapter 1',
        levels: [
          {
            order: 0,
            name: 'Level 1',
            unlocked: true,
            completed: false,
            collectables: 1,
            collectablesAcquired: 0,
          },
          {
            order: 1,
            name: 'Level 2',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 2,
            name: 'Level 3',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 3,
            name: 'Level 4',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 4,
            name: 'Level 5',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 5,
            name: 'Level 6',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 6,
            name: 'Level 7',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 7,
            name: 'Level 8',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 8,
            name: 'Level 9',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 9,
            name: 'Level 10',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
        ],
        unlocked: true,
        completed: false,
      },
      {
        order: 1,
        name: 'Chapter 2',
        levels: [
          {
            order: 0,
            name: 'Level 1',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 1,
            name: 'Level 2',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 2,
            name: 'Level 3',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 3,
            name: 'Level 4',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 4,
            name: 'Level 5',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 5,
            name: 'Level 6',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 6,
            name: 'Level 7',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 7,
            name: 'Level 8',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 8,
            name: 'Level 9',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 9,
            name: 'Level 10',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
        ],
        unlocked: false,
        completed: false,
      },
      {
        order: 2,
        name: 'Chapter 3',
        levels: [
          {
            order: 0,
            name: 'Level 1',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 1,
            name: 'Level 2',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 2,
            name: 'Level 3',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 3,
            name: 'Level 4',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 4,
            name: 'Level 5',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 5,
            name: 'Level 6',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 6,
            name: 'Level 7',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 7,
            name: 'Level 8',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 8,
            name: 'Level 9',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 9,
            name: 'Level 10',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
        ],
        unlocked: false,
        completed: false,
      },
      {
        order: 3,
        name: 'Chapter 4',
        levels: [
          {
            order: 0,
            name: 'Level 1',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 1,
            name: 'Level 2',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 2,
            name: 'Level 3',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 3,
            name: 'Level 4',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 4,
            name: 'Level 5',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 5,
            name: 'Level 6',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 6,
            name: 'Level 7',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 7,
            name: 'Level 8',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 8,
            name: 'Level 9',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
          {
            order: 9,
            name: 'Level 10',
            unlocked: false,
            completed: false,
            collectables: 3,
            collectablesAcquired: 0,
          },
        ],
        unlocked: false,
        completed: false,
      },
    ];
  } else {
    this.updatedAt = new Date();
  }
  next();
});

export default schema;
