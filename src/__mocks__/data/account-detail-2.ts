import { sub } from 'date-fns';

import { Account, CATEGORIES, UMA_VERIFY_STATUS } from '~/types';

import { price } from '~/__mocks__/data/token-price';
import { MOCK_USER } from '~/constants';

const tokenValue =
  103.51 * Number(price.find(p => p.symbol === 'ETH')?.lastPriceUSD) +
  104692.52 * Number(price.find(p => p.symbol === 'STG')?.lastPriceUSD) +
  200 * Number(price.find(p => p.symbol === 'ETH')?.lastPriceUSD);

export const accountDetail: Account = {
  id: MOCK_USER.USER_2,

  address: '0x48DBa2D1b6C89Bf8234C2B63554369aDC7Ae3258',
  receivingAddress: '0x9DCD43faB2CF8104cb2ff53CF4C051842C125EE0',

  title: 'Accounts that are highly expected to receive $ZKS token airdrop and more',
  description:
    'Accounts that are highly expected to receive $ZKS token airdrop and are already scheduled for the LayerZero token ($ZRO) airdrop. (TODO: + 수정필요~)',
  category: CATEGORIES.WHITELIST,

  price: 10000 * Math.floor(tokenValue / 10000),
  tokenValue: tokenValue,

  verified: [
    {
      id: '1',
      text: 'WhiteList bla bla',
      status: UMA_VERIFY_STATUS.SUCCESS,
      date: new Date(),
    },
    {
      id: '2',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: UMA_VERIFY_STATUS.PENDING,
    },
    {
      id: '3',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: UMA_VERIFY_STATUS.FAIL,
      date: sub(new Date(), { hours: 7 }),
    },
  ],
  hidden: true,
};
