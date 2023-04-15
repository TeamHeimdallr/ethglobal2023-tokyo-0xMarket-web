import IconArbitrum from '~/assets/icons/icon-arbitrum.png';
import IconDex from '~/assets/icons/icon-dex.png';
import IconEth from '~/assets/icons/icon-eth.png';
import IconMatic from '~/assets/icons/icon-matic.png';
import IconNft from '~/assets/icons/icon-nft.png';
import IconZksync from '~/assets/icons/icon-zksync.png';

import { AccountTxHistory } from '~/types';
import {
  AccountInGameInfo,
  AccountLockupToken,
  AccountNftSbt,
  AccountStakingAsset,
  AccountToken,
  CURRENCY,
  LOCKUP_TYPE,
} from '~/types';

export const accountInGameInfos: AccountInGameInfo[] = [
  {
    id: '1',
    title: '',
  },
  {
    id: '2',
    title: '',
  },
];

export const accountTokens: AccountToken[] = [
  {
    id: '1',
    image: IconEth,
    token: { name: CURRENCY.ETH, value: '0.06' },
    tokenValue: 1864,
  },
  {
    id: '2',
    image: IconMatic,
    token: { name: CURRENCY.MATIC, value: '99.99' },
    tokenValue: 100,
  },
  {
    id: '3',
    image: IconEth,
    token: { name: CURRENCY.ETH, value: '10.3939' },
    tokenValue: 5000,
  },
];

export const accountNfts: AccountNftSbt[] = [
  {
    id: '1',

    image:
      'https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png',
    token: { name: 'Bored Ape Yacht Club', id: '1456' },
    nftValue: { name: CURRENCY.ETH, value: '230.99' },
    tokenValue: 3000,
  },
  {
    id: '2',

    image:
      'https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png',
    token: { name: 'Bored Ape Yacht Club', id: '1456' },
    nftValue: { name: CURRENCY.ETH, value: '230.99' },
    tokenValue: 3000,
  },
];

export const accountSbts: AccountNftSbt[] = [
  {
    id: '1',

    image:
      'https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png',
    token: { name: 'Bored Ape Yacht Club', id: '1456' },
  },
  {
    id: '2',

    image:
      'https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png',
    token: { name: 'Bored Ape Yacht Club', id: '1456' },
  },
];

export const accountLockupTokens: AccountLockupToken[] = [
  {
    id: '1',
    image: IconEth,
    type: LOCKUP_TYPE.VESTING,
    token: { name: CURRENCY.ETH, value: '100,000' },
    tokenValue: 1864.93,
    date: new Date(),
  },
  {
    id: '2',
    image: IconMatic,
    type: LOCKUP_TYPE.UNLOCKED,
    token: { name: CURRENCY.MATIC, value: '99.99' },
    tokenValue: 100,
    date: new Date(),
  },
  {
    id: '3',
    image: IconEth,
    type: LOCKUP_TYPE.AIRDROP,
    token: { name: CURRENCY.ETH, value: '100,000' },
    tokenValue: 1864.93,
    date: new Date(),
  },
];

export const accountStakingAssets: AccountStakingAsset[] = [
  {
    id: '1',
    image: IconEth,
    token: { name: CURRENCY.ETH, value: '100,000' },
    tokenValue: 1864.93,
    stakedAt: 'Lido',
  },
  {
    id: '2',
    image: IconMatic,
    token: { name: CURRENCY.MATIC, value: '99.99' },
    tokenValue: 100,
    stakedAt: 'Coinbase Wrapped Staked ETH',
  },
  {
    id: '3',
    image: IconEth,
    token: { name: CURRENCY.ETH, value: '100,000' },
    tokenValue: 1864.93,
    stakedAt: 'Rocket Pool',
  },
];

export const accountTxHistories: AccountTxHistory[] = [
  {
    id: '1',
    image: IconEth,
    title: 'May 17, 2018',
    description: 'First Tx on Ethereum',
  },
  {
    id: '2',
    image: IconArbitrum,
    title: 'Over 1k',
    description: 'No. of Tx on Abitrum',
  },
  {
    id: '3',
    image: IconZksync,
    title: 'Over 1k',
    description: 'No. of Tx on zkSync',
  },
  {
    id: '4',
    image: IconZksync,
    title: 'Over 100',
    description: 'Tx Vol. on zkSync',
  },
  {
    id: '5',
    image: IconNft,
    title: 'Over $1m',
    description: 'Tx Vol. on NFT Marketplace',
  },
  {
    id: '6',
    image: IconDex,
    title: 'Over $1m',
    description: 'Tx Vol. on DEX',
  },
  {
    id: '7',
    image: IconDex,
    title: 'Over $1k',
    description: 'Provided Liquidity on DEX',
  },
];
