import { Account, CATEGORIES } from '~/types';

import { MOCK_USER } from '~/constants';

export const accountDetail: Account = {
  id: MOCK_USER.USER_3,

  address: '0x1884e327984E12b8ce525D2AC3B7aa08271c83f4',
  receivingAddress: '0x9DCD43faB2CF8104cb2ff53CF4C051842C125EE0',

  title: "[Demo for Airstack] The value of Vitalik's assets and histories",
  description:
    "It is a demo page only for Airstack. Other page and original demo were in Goerli testnet, but this page is connected to Ethereum mainnet for proving our implementation about Airstack. We queried Vitalik's assets and histories using Airstack. Thank you Airstack! We'd love it.",
  category: CATEGORIES.TOKEN,

  price: 100000000,
  tokenValue: 1185603,

  verified: [],
};
