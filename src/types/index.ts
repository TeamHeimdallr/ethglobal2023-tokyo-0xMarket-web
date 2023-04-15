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

export interface Account {
  id: string;

  address: string;
  receivingAddress: string;

  title: string;
  description: string;
  category: CATEGORIES;

  price: number;
  tokenValue: number;

  verified?: boolean;
  hidden?: boolean;
}

export type AccountDiscover = Pick<
  Account,
  'id' | 'title' | 'category' | 'price' | 'tokenValue' | 'verified'
>;

export type ListingAccount = Partial<Omit<Account, 'id'>>;

export interface AccountInGameInfo {
  title: string;
}
export interface AccountNftSbt {
  image: string;
  token: NFT;
  tokenValue?: Token;
}
export interface AccountToken {
  image: string;
  token: Token;
  tokenValue: Token;
}
export interface AccountLockupToken {
  image: string;
  type: LOCKUP_TYPE;

  token: Token;
  tokenValue: Token;

  totalToken?: Token;
  date: Date;
}
export interface AccountStakingAsset {
  image: string;
  token: Token;
  tokenValue: Token;
  stakedAt: string;
}
export interface AccountTxHistory {
  image: string;
  title: string;
  description: string;
}

export interface Notification {
  id: string;

  account: string;
  message: string;

  timestamp: number;
  isNew: boolean;

  image?: string;
}
