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

export const MARKET_CONTRACT_ADDRESS = IS_MAINNET
  ? '0x'
  : '0xDB75955BBdB41686f4799408107d409BfCFa04Fd';

export const STATEMENT_VERIFIER_CONTRACT_ADDRESS = IS_MAINNET
  ? '0x'
  : '0x6707275495aa281436219e97eB45B2a09053Ac04';

export const OOV3_CONTRACT_ADDRESS = IS_MAINNET
  ? '0x'
  : '0x9923D42eF695B5dd9911D05Ac944d4cAca3c4EAB';

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
  ZKSCROLL: 534353,
};
export const DEFAULT_CHAIN_ID = CHAIN_ID.GOERLI;

export const DATE_FORMATTER = {
  MMM_d_yyyy: 'MMM d, yyyy',
};

export const DEFAULT_DECIMAL = 18;
