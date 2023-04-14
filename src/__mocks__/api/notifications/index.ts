import { rest } from 'msw';

import { notificationDB } from '~/__mocks__/db/notifications';
import { API_URL } from '~/constants';

export const apiNotifications = [
  rest.get(`${API_URL}/notifications`, (req, res, ctx) => {
    const data = notificationDB.notifications.getAll();

    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.post(`${API_URL}/notification/read`, (req, res, ctx) => {
    const data = notificationDB.notifications.updateMany({
      where: {
        isNew: { equals: true },
      },
      data: {
        isNew: false,
      },
    });

    return res(ctx.status(201), ctx.json({ data }));
  }),
];
