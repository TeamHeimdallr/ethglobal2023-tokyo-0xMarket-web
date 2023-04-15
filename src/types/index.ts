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
  id: string;

  title: string;
}
export interface AccountNftSbt {
  id: string;

  image: string;
  token: NFT;

  nftValue?: Token;
  tokenValue?: number;
}
export interface AccountToken {
  id: string;

  image: string;
  token: Token;
  tokenValue: number;
}
export interface AccountLockupToken {
  id: string;

  image: string;
  type: LOCKUP_TYPE;

  token: Token;
  tokenValue: number;

  totalToken?: Token;
  date: Date;
}
export interface AccountStakingAsset {
  id: string;

  image: string;
  token: Token;
  tokenValue: number;
  stakedAt: string;
}
export interface AccountTxHistory {
  id: string;

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
