import { graphql, rest } from 'msw';

import {
  accountAllTx,
  accountFirstTx as accountFirstTx1,
  accountInGameInfos as accountInGameInfos1,
  accountLockupTokens as accountLockupTokens1,
  accountNftTx as accountNftTx1,
  accountStakingAssets as accountStakingAssets1,
  accountTokens as accountTokens1,
  accountTokenTx as accountTokenTx1,
} from '~/__mocks__/data/account-portfolios-1';
import {
  accountInGameInfos as accountInGameInfos2,
  accountLockupTokens as accountLockupTokens2,
  accountStakingAssets as accountStakingAssets2,
  accountTokens as accountTokens2,
} from '~/__mocks__/data/account-portfolios-2';
import { API_URL, API_URL_ETHERSCAN } from '~/constants';

export const apiAccountPortfolios = [
  rest.get(`${API_URL}/account/:id/portfolio/in-game-infos`, (req, res, ctx) => {
    const id = req.params.id;
    const data = id === '1' ? accountInGameInfos1 : accountInGameInfos2;

    return res(ctx.status(200), ctx.json({ data }));
  }),

  graphql.query('tokens', (req, res, ctx) => {
    const { account } = req.variables;
    const data = account === '1' ? accountTokens1 : accountTokens2;

    return res(ctx.status(200), ctx.data({ data }));
  }),

  rest.get(`${API_URL_ETHERSCAN}?module=account&action=txlist`, (req, res, ctx) => {
    const action = req.url.searchParams.get('action');
    const account = req.url.searchParams.get('account');
    const offset = req.url.searchParams.get('offset');

    let resData = {};
    if (action === 'txlist') {
      const data = {
        status: '1',
        message: 'OK',
        result: offset === '1' ? [accountFirstTx1] : accountAllTx,
      };
      resData = account === '1' ? data : data;
    }
    if (action === 'tokentx') {
      const data = {
        status: '1',
        message: 'OK',
        result: accountTokenTx1,
      };
      resData = account === '1' ? data : data;
    }
    if (action === 'tokennfttx') {
      const data = {
        status: '1',
        message: 'OK',
        result: accountNftTx1,
      };
      resData = account === '1' ? data : data;
    }

    return res(ctx.status(200), ctx.json({ data: resData }));
  }),

  rest.get(`${API_URL}/account/:id/portfolio/lock-up-tokens`, (req, res, ctx) => {
    const id = req.params.id;
    const data = id === '1' ? accountLockupTokens1 : accountLockupTokens2;

    return res(ctx.status(200), ctx.json({ data }));
  }),

  rest.get(`${API_URL}/account/:id/portfolio/staking-assets`, (req, res, ctx) => {
    const id = req.params.id;
    const data = id === '1' ? accountStakingAssets1 : accountStakingAssets2;

    return res(ctx.status(200), ctx.json({ data }));
  }),
];
