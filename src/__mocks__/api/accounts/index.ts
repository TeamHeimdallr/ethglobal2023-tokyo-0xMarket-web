import { rest } from 'msw';

import { accountDetail as accountDetail1 } from '~/__mocks__/data/account-detail-1';
import { accountDetail as accountDetail2 } from '~/__mocks__/data/account-detail-2';
import { accountDB } from '~/__mocks__/db/accounts';
import { API_URL } from '~/constants';

export const apiAccounts = [
  rest.get(`${API_URL}/accounts`, (req, res, ctx) => {
    const data = accountDB.accountDiscovers.getAll();

    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.get(`${API_URL}/account/:id`, (req, res, ctx) => {
    const id = req.params.id;
    const data = id === '1' ? accountDetail1 : accountDetail2;

    return res(ctx.status(200), ctx.json({ data }));
  }),
];
