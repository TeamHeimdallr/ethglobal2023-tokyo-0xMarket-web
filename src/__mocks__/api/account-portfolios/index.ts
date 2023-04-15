import { rest } from 'msw';

import {
  accountInGameInfos as accountInGameInfos1,
  accountLockupTokens as accountLockupTokens1,
  accountNfts as accountNfts1,
  accountSbts as accountSbts1,
  accountStakingAssets as accountStakingAssets1,
  accountTokens as accountTokens1,
  accountTxHistories as accountTxHistories1,
} from '~/__mocks__/data/account-portfolios-1';
import {
  accountInGameInfos as accountInGameInfos2,
  accountLockupTokens as accountLockupTokens2,
  accountNfts as accountNfts2,
  accountSbts as accountSbts2,
  accountStakingAssets as accountStakingAssets2,
  accountTokens as accountTokens2,
  accountTxHistories as accountTxHistories2,
} from '~/__mocks__/data/account-portfolios-2';
import { API_URL } from '~/constants';

export const apiAccountPortfolios = [
  rest.get(`${API_URL}/account/:id/portfolio/in-game-infos`, (req, res, ctx) => {
    const id = Number(req.params.id);
    const data = id === 1 ? accountInGameInfos1 : accountInGameInfos2;

    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.get(`${API_URL}/account/:id/portfolio/tokens`, (req, res, ctx) => {
    const id = Number(req.params.id);
    const data = id === 1 ? accountTokens1 : accountTokens2;

    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.get(`${API_URL}/account/:id/portfolio/nfts`, (req, res, ctx) => {
    const id = Number(req.params.id);
    const data = id === 1 ? accountNfts1 : accountNfts2;

    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.get(`${API_URL}/account/:id/portfolio/sbts`, (req, res, ctx) => {
    const id = Number(req.params.id);
    const data = id === 1 ? accountSbts1 : accountSbts2;

    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.get(`${API_URL}/account/:id/portfolio/lock-up-tokens`, (req, res, ctx) => {
    const id = Number(req.params.id);
    const data = id === 1 ? accountLockupTokens1 : accountLockupTokens2;

    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.get(`${API_URL}/account/:id/portfolio/staking-assets`, (req, res, ctx) => {
    const id = Number(req.params.id);
    const data = id === 1 ? accountStakingAssets1 : accountStakingAssets2;

    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.get(`${API_URL}/account/:id/portfolio/tx-histories`, (req, res, ctx) => {
    const id = Number(req.params.id);
    const data = id === 1 ? accountTxHistories1 : accountTxHistories2;

    return res(ctx.status(200), ctx.json({ data }));
  }),
];
