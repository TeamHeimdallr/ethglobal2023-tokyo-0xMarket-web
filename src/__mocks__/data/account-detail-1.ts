import { Account, CATEGORIES, UMA_VERIFY_STATUS } from '~/types';

import { MOCK_USER } from '~/constants';

export const accountDetail: Account = {
  id: MOCK_USER.USER_1,

  address: '0x48DBa2D1b6C89Bf8234C2B63554369aDC7Ae3258',
  receivingAddress: '0x9DCD43faB2CF8104cb2ff53CF4C051842C125EE0',

  title: '[Axie Infinity] Tiger2 Tier Axie Account / 3 Axie Pets worth over $1K',
  description:
    'I have been playing Axie Infinity for more than 2 years and now on Tiger 2 Tier. My all time high tier was Challenger 0. I also have 3 Axie Pets for the game and you can find attributes on them in my NFT portfollio.\n' +
    'I confirm that this account was not used in any illegal actions and you can find that tag is clean in the explorer.\n' +
    'I left more than 2 ETH for you to use it as a gas fee.\n' +
    'Chat me for any q',
  category: CATEGORIES.GAME,

  price: 2500,
  tokenValue: 10372,

  verified: [
    {
      id: '1',
      text: 'My highest tier on Axie Infinity was Challenger 0',
      status: UMA_VERIFY_STATUS.PENDING,
    },
    {
      id: '2',
      text: 'I have no flag on illegal actions tagged in Etherscan',
      status: UMA_VERIFY_STATUS.SUCCESS,
      date: new Date(),
    },
  ],
  hidden: false,
};
