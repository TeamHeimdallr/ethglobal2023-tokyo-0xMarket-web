import { faker } from '@faker-js/faker';
import { factory, nullable, primaryKey } from '@mswjs/data';
import { sub } from 'date-fns';

export const notificationDB = factory({
  notifications: {
    id: primaryKey(() => faker.random.alphaNumeric(6)),

    account: String,
    message: String,
    timestamp: Number,
    isNew: Boolean,
    image: nullable(String),
  },
});

notificationDB.notifications.create({
  account: '0x9DCD43faB2CF8104cb2ff53CF4C051842C125EE0',
  message: 'Your account has been sold.',
  timestamp: Date.now(),
  isNew: true,
});

notificationDB.notifications.create({
  account: '0x9DCD43faB2CF8104cb2ff53CF4C051842C125EE0',
  message: 'Your account has been sold.',
  timestamp: sub(new Date(), { hours: 3 }).getTime(),
  isNew: false,
});
