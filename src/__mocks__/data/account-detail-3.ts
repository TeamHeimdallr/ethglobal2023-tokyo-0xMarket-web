import { Account, CATEGORIES } from '~/types';

import { MOCK_USER } from '~/constants';

export const accountDetail: Account = {
  id: MOCK_USER.USER_3,

  address: '0x1884e327984E12b8ce525D2AC3B7aa08271c83f4',
  receivingAddress: '0x9DCD43faB2CF8104cb2ff53CF4C051842C125EE0',

  title: 'Demo for airstack',
  description:
    'This account is a account to receive $TOKYO token vesting from the angel investment a year ago.\n' +
    'We have received 100,000 $TOKYO until now and waiting for the next drop in April 28th, 2023.\n' +
    'Remaining drops will be 50,000 $TOKYO for 6 linear month.\n' +
    'We will submit our contract copy for verification from the UMA optimistic oracle with the transaction history for last one year on $TOKYO token',
  category: CATEGORIES.TOKEN,

  price: 15000,
  tokenValue: 511.57311,

  verified: [],
};
