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
  name: string;
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

export enum UMA_VERIFY_STATUS {
  SUCCESS = 'SUCCESS',
  PENDING = 'PENDING',
  FAIL = 'FAIL',
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

  verified?: AccountUmaVerified[];
  hidden?: boolean;
}

export type AccountDiscover = Pick<
  Account,
  'id' | 'address' | 'title' | 'category' | 'price' | 'tokenValue'
>;

export interface AccountEthBalance {
  decimals: string;
  formatted: string;
  symbol: string;
  value: string;
}

interface GameItem {
  value: string;
  logo?: {
    src: string;
    width?: number;
    height?: number;
  };
}

export interface AccountUmaVerified {
  id: string;
  status: string;
  text: string;

  date?: Date;
}

export interface AccountInGameInfo {
  id: string;
  user: string;
  game: {
    name: string;
    logo: string;
  };
  infos?: {
    label: string;
    value: string;
    logo?: string;
  }[];
  items?: {
    label: string;
    items: GameItem[];
    type?: 'row' | 'col';
  }[];
}

export interface AccountTokenAll {
  data: {
    erc20: {
      data: AccountToken[];
    };
    erc721: {
      data: AccountNft[];
    };
    poap: {
      data: AccountSbt[];
    };
  };
}

export interface AccountToken {
  amount: string;
  formattedAmount: number;

  chainId: string;
  id: string;

  tokenAddress: string;
  tokenId: string;
  tokenType: string;
  token: {
    name: string;
    symbol: string;
  };

  image?: string;
}

export interface AccountNft {
  amount: string;
  chainId: string;

  id: string;
  tokenAddress: string;
  tokenId: string;
  tokenType: 'ERC721';

  token: {
    name: string;
    symbol: string;
  };

  tokenNfts: {
    tokenId: string;
    metaData: {
      name: string | null;
    };
    contentValue: {
      image: {
        medium: string;
        extraSmall: string;
        large: string;
        original: string;
        small: string;
      } | null;
    };
  };
}

export interface AccountSbt {
  amount: string;
  tokenAddress: string;
  tokenId: string;
  tokenType: 'ERC721';

  token: {
    name: string;
    symbol: string;
  };
  tokenNfts: {
    metaData: {
      name: string | null;
    };
    tokenURI: string | null;
  };
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

export interface Notification {
  id: string;

  account: string;
  message: string;

  timestamp: number;
  isNew: boolean;

  image?: string;
}

export interface EtherscanTx {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  transactionIndex: string;
  from: string;
  to: string;
  value: string;
  gas: string;
  gasPrice: string;
  isError: string;
  txreceipt_status: string;
  input: string;
  contractAddress: string;
  cumulativeGasUsed: string;
  gasUsed: string;
  confirmations: string;
}

export interface EtherscanTokenTx {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  from: string;
  contractAddress: string;
  to: string;
  value: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal: string;
  transactionIndex: string;
  gas: string;
  gasPrice: string;
  gasUsed: string;
  cumulativeGasUsed: string;
  input: string;
  confirmations: string;
}

export interface EtherscanNftTx {
  blockNumber: string;
  timeStamp: string;
  hash: string;
  nonce: string;
  blockHash: string;
  from: string;
  contractAddress: string;
  to: string;
  tokenID: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimal: string;
  transactionIndex: string;
  gas: string;
  gasPrice: string;
  gasUsed: string;
  cumulativeGasUsed: string;
  input: string;
  confirmations: string;
}

export interface AccountTxHistory {
  id: string;

  image: string;
  title: string;
  description: string;
}
