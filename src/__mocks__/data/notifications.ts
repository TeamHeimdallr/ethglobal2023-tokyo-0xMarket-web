import { sub } from 'date-fns';

import { Notification } from '~/types';

export const notifications: Notification[] = [
  {
    id: '1',
    account: '0x9DCD43faB2CF8104cb2ff53CF4C051842C125EE0',
    message: 'Your account has been sold.',
    timestamp: Date.now(),
    isNew: true,
  },
  {
    id: '2',
    account: '0x9DCD43faB2CF8104cb2ff53CF4C051842C125EE0',
    message: 'Your account has been sold.',
    timestamp: sub(new Date(), { hours: 3 }).getTime(),
    isNew: false,
  },
];
