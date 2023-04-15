import { faker } from '@faker-js/faker';
import { factory, nullable, primaryKey } from '@mswjs/data';

import { notifications } from '~/__mocks__/data/notifications';

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

notifications.forEach(notification => {
  notificationDB.notifications.create(notification);
});
