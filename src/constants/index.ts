import { COLOR } from '~/assets/colors';

import { CATEGORIES, CategoryMap } from '~/types';

export const IS_MOCK = process.env.REACT_APP_ENABLE_MOCK === 'true';

export const IS_DEV = process.env.REACT_APP_START_ENV === 'dev';
export const IS_PROD = process.env.REACT_APP_START_ENV === 'prod';
export const IS_LOCAL = process.env.REACT_APP_START_ENV === 'local';

export const IS_MAINNET = IS_PROD;

export const MARKET_CONTRACT_ADDRESS = IS_MAINNET ? '0x' : '0x';

export const API_URL = IS_LOCAL
  ? 'http://localhost:8080'
  : IS_DEV
  ? 'https://'
  : IS_PROD
  ? 'https://'
  : 'https://';

export const CategoriesMap: CategoryMap = {
  [CATEGORIES.GAME]: {
    key: CATEGORIES.GAME,
    text: 'Game',
    color: COLOR.GAME().toHexString(),
  },
  [CATEGORIES.WHITELIST]: {
    key: CATEGORIES.WHITELIST,
    text: 'Whitelist',
    color: COLOR.WHITELIST().toHexString(),
  },
  [CATEGORIES.SBT]: {
    key: CATEGORIES.SBT,
    text: 'SBT',
    color: COLOR.SBT().toHexString(),
  },
  [CATEGORIES.TOKEN]: {
    key: CATEGORIES.TOKEN,
    text: 'Token',
    color: COLOR.TOKEN().toHexString(),
  },
  [CATEGORIES.GENERAL]: {
    key: CATEGORIES.GENERAL,
    text: 'General',
    color: COLOR.GENERAL().toHexString(),
  },
};
