import { Account, CATEGORIES } from '~/types';

export const accountDetail: Account = {
  id: '1',

  address: '0x48DBa2D1b6C89Bf8234C2B63554369aDC7Ae3258',
  receivingAddress: '0x9DCD43faB2CF8104cb2ff53CF4C051842C125EE0',

  title: 'Diablo VII: Several Top Tier Soulbound Weapons & Armors',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  category: CATEGORIES.GAME,

  price: 2345678,
  tokenValue: 123456,

  verified: true,
  hidden: false,
};
