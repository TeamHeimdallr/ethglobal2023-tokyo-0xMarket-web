import { AccountDiscover, CATEGORIES } from '~/types';

export const accountDiscovers: AccountDiscover[] = [
  {
    id: '1',
    title: 'Diablo VII: Several Top Tier Soulbound Weapons & Armors',
    category: CATEGORIES.GAME,
    price: 999999999,
    tokenValue: 123456,
    verified: true,
  },
  {
    id: '2',
    title: 'Early-access to BAYC Otherside',
    category: CATEGORIES.GENERAL,
    price: 123456,
    tokenValue: 123456,
  },
  {
    id: '3',
    title: 'Unstaking-in-progress 3,000 stETH -> ETH, 5 days left',
    category: CATEGORIES.SBT,
    price: 12000,
    tokenValue: 123456,
    verified: true,
  },
  {
    id: '4',
    title: 'Vesting-in-process 50,000 UNI for 6 months',
    category: CATEGORIES.TOKEN,
    price: 3849000,
    tokenValue: 5000000,
    verified: true,
  },
  {
    id: '5',
    title: 'Whitelisted in BAYC Season 3 minting event',
    category: CATEGORIES.WHITELIST,
    price: 200000,
    tokenValue: 0,
    verified: true,
  },
  {
    id: '6',
    title: 'Diablo VII: Several Top Tier Soulbound Weapons & Armors',
    category: CATEGORIES.GAME,
    price: 1000,
    tokenValue: 0,
  },
];
