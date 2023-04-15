import { rest } from 'msw';

import { accountDB } from '~/__mocks__/db/accounts';
import { API_URL } from '~/constants';

export const apiAccounts = [
  rest.get(`${API_URL}/accounts`, (req, res, ctx) => {
    const data = accountDB.accountDiscovers.getAll();

    return res(ctx.status(200), ctx.json({ data }));
  }),
];
