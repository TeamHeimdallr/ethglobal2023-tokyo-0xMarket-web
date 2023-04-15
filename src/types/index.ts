export interface CategoryMap {
  [key: string]: {
    key: CATEGORIES;
    text: string;
    color?: string;
    textColor?: string;
    image?: string;
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

export interface NFT {
  name: string;
  id: string;
}
export interface Token {
  name: CURRENCY;
  value: string;
}

export enum CURRENCY {
  USD = '$',
  ETH = 'ETH',
  MATIC = 'MATIC',
}

export enum LOCKUP_TYPE {
  VESTING = 'VESTING',
  UNLOCKED = 'UNLOCKED',
  AIRDROP = 'AIRDROP',
}
