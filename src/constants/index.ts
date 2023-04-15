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
  : '0xce54082acf6ae7B81C84096bd7a0f0728f934Ad8';

export const STATEMENT_VERIFIER_CONTRACT_ADDRESS = IS_MAINNET
  ? '0x'
  : '0x6707275495aa281436219e97eB45B2a09053Ac04';

export const OOV3_CONTRACT_ADDRESS = IS_MAINNET
  ? '0x'
  : '0x9923D42eF695B5dd9911D05Ac944d4cAca3c4EAB';

export const TRADE_TOKEN_ADDRESS = IS_MAINNET ? '0x' : '0xfeb936d27aadde0b33a11bcd2842c7507e2277e3';
export const API_URL_ETHERSCAN = IS_MAINNET ? '' : 'https://api-goerli.etherscan.io/api';
export const ETHERSCAN_API_KEY = 'HPWTPRKCEMT3JFRCYYPETD3694ISJRYW6F';
export const AIRSTACK_API_URL = 'https://api.airstack.xyz/gql/4tITyVlBrB';

export const MOCK_USER = {
  USER_1: '0x48DBa2D1b6C89Bf8234C2B63554369aDC7Ae3258',
  USER_2: 'wz8zwPsNM6AbrtnE',
};

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

export const LISTED_LOCAL_KEY = '0xMarketAccounts';
