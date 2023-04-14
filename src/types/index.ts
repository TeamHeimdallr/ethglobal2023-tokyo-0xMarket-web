export interface CategoryMap {
  [key: string]: {
    key: CATEGORIES;
    text: string;
    color?: string;
  };
}

export enum CATEGORIES {
  GAME = 'GAME',
  WHITELIST = 'WHITELIST',
  SBT = 'SBT',
  TOKEN = 'TOKEN',
  GENERAL = 'GENERAL',
}

export interface Balance {
  currency: CURRENCY;
  balance: number;
}

export enum CURRENCY {
  USD = 'USD',
  ETH = 'ETH',
}
