import { COLOR } from '~/assets/colors';
import categoryGameImage from '~/assets/images/image-game.png';
import categoryGeneralImage from '~/assets/images/image-general.png';
import categorySbtImage from '~/assets/images/image-sbt.png';
import categoryTokenImage from '~/assets/images/image-token.png';
import categoryWhitelistImage from '~/assets/images/image-whitelist.png';

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
  ? 'http://localhost:8080'
  : IS_PROD
  ? 'http://localhost:8080'
  : 'http://localhost:8080';

export const CategoriesMap: CategoryMap = {
  [CATEGORIES.GAME]: {
    key: CATEGORIES.GAME,
    text: 'Game',
    color: COLOR.GAME().toHexString(),
    textColor: '#FFF',
    image: categoryGameImage,
  },
  [CATEGORIES.WHITELIST]: {
    key: CATEGORIES.WHITELIST,
    text: 'Whitelist',
    color: COLOR.WHITELIST().toHexString(),
    textColor: '#000',
    image: categoryWhitelistImage,
  },
  [CATEGORIES.SBT]: {
    key: CATEGORIES.SBT,
    text: 'SBT',
    color: COLOR.SBT().toHexString(),
    textColor: '#FFF',
    image: categorySbtImage,
  },
  [CATEGORIES.TOKEN]: {
    key: CATEGORIES.TOKEN,
    text: 'Token',
    color: COLOR.TOKEN().toHexString(),
    textColor: '#FFF',
    image: categoryTokenImage,
  },
  [CATEGORIES.GENERAL]: {
    key: CATEGORIES.GENERAL,
    text: 'General',
    color: COLOR.GENERAL().toHexString(),
    textColor: '#FFF',
    image: categoryGeneralImage,
  },
};

export const CHAIN_ID = {
  GOERLI: 5,
  POLYGON: 137,
  ARBITRUM: 42161,
};

export const DATE_FORMATTER = {
  MMM_d_yyyy: 'MMM d, yyyy',
};
