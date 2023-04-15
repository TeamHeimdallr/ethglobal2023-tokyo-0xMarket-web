import { Account, CATEGORIES, UMA_VERIFY_STATUS } from '~/types';

import { MOCK_USER } from '~/constants';

export const accountDetail: Account = {
  id: MOCK_USER.USER_2,

  address: '0x48DBa2D1b6C89Bf8234C2B63554369aDC7Ae3250',
  receivingAddress: '0x9DCD43faB2CF8104cb2ff53CF4C051842C125EE0',

  title: '6 Month vesting left wallet for $TOKYO token. Monthly drop',
  description:
    'This account is a account to receive $TOKYO token vesting from the angel investment a year ago.\n' +
    'We have received 100,000 $TOKYO until now and waiting for the next drop in April 28th, 2023.\n' +
    'Remaining drops will be 50,000 $TOKYO for 6 linear month.\n' +
    'We will submit our contract copy for verification from the UMA optimistic oracle with the transaction history for last one year on $TOKYO token',
  category: CATEGORIES.TOKEN,

  price: 15000,
  tokenValue: 511.57311,

  verified: [
    {
      id: 'p1-1',
      text: 'I will be receving 50,000 $TOKYO tokens for 6 months from now on',
      status: UMA_VERIFY_STATUS.SUCCESS,
      date: new Date(),
    },
  ],
};
