import IconEth from '~/assets/icons/icon-eth.png';

import { randomDate } from '~/utils/date';

import {
  AccountEthBalance,
  AccountTokenAll,
  AccountTxHistory,
  EtherscanNftTx,
  EtherscanTokenTx,
  EtherscanTx,
} from '~/types';
import { AccountInGameInfo, AccountLockupToken, AccountStakingAsset } from '~/types';

export const accountEthBalance: AccountEthBalance = {
  decimals: '18',
  formatted: '0.241',
  symbol: 'ETH',
  value: '103510000000000000000',
};
export const accountTokens: AccountTokenAll = {
  data: {
    erc20: {
      data: [],
    },
    erc721: {
      data: [],
    },
    poap: {
      data: [],
    },
  },
};

export const accountFirstTx: EtherscanTx = {
  blockNumber: '5782338',
  timeStamp: '1635909569',
  hash: '0xea20d60639bdda99e07812a77f3b4193226e9e214cfa543bdd9e9c1df7bbd99a',
  nonce: '29',
  blockHash: '0x298a09a904e53ef1f1ecf0ffd36a56bdc01cc080b068fa95555ff6315e938475',
  transactionIndex: '1',
  from: '0x250252bb1f23182230f51ac65d37cef285437fc6',
  to: '0x8d6896bd0f12ec867ee7a6e92f13add924bacf03',
  value: '270000001260000',
  gas: '90000',
  gasPrice: '1500000007',
  isError: '0',
  txreceipt_status: '1',
  input: '0x',
  contractAddress: '',
  cumulativeGasUsed: '151526',
  gasUsed: '21000',
  confirmations: '1437',
};

export const accountAllTx: EtherscanTx[] = [...Array(10).keys()].map(k => ({
  blockNumber: '5782338',
  timeStamp: '1635909569',
  hash: '0xea20d60639bdda99e07812a77f3b4193226e9e214cfa543bdd9e9c1df7bbd99a' + k,
  nonce: '29',
  blockHash: '0x298a09a904e53ef1f1ecf0ffd36a56bdc01cc080b068fa95555ff6315e938475',
  transactionIndex: '1',
  from: '0x250252bb1f23182230f51ac65d37cef285437fc6',
  to: '0x8d6896bd0f12ec867ee7a6e92f13add924bacf03',
  value: '270000001260000',
  gas: '90000',
  gasPrice: '1500000007',
  isError: '0',
  txreceipt_status: '1',
  input: '0x',
  contractAddress: '',
  cumulativeGasUsed: '151526',
  gasUsed: '21000',
  confirmations: '1437',
}));

export const accountTokenTx: EtherscanTokenTx[] = [...Array(10).keys()]
  .map(k => {
    const timestamp = randomDate(new Date('2022-01-01'), new Date()).getTime();
    return {
      blockNumber: '5582998',
      timeStamp: `${timestamp}`,
      hash: '0xed3a265cebd603aa2cb9771be5c6ce10ff1e4c7a0be755527308fba56901e2b' + k,
      nonce: '2682',
      blockHash: '0x1f051722b99b6d5ba3ad505f0725d5851bfecd33266c26cb16cff46d2278069f',
      from: '0x0000000000000000000000000000000000000000',
      contractAddress: '0xb809b9b2dc5e93cb863176ea2d565425b03c0540',
      to: '0xfbc324f89831015a906b7daff97c7fd46c374413',
      value: '100000000000000000000000000',
      tokenName: 'Binance USD',
      tokenSymbol: 'BUSD',
      tokenDecimal: '18',
      transactionIndex: '2',
      gas: '100000',
      gasPrice: '4426464068',
      gasUsed: '58830',
      cumulativeGasUsed: '169150',
      input: 'deprecated',
      confirmations: '200827',
    };
  })
  .sort((a, b) => Number(a.timeStamp) - Number(b.timeStamp));

export const accountNftTx: EtherscanNftTx[] = [...Array(10).keys()]
  .map(k => {
    const timestamp = randomDate(new Date('2022-01-01'), new Date()).getTime();
    return {
      blockNumber: '4772010',
      timeStamp: `${timestamp}`,
      hash: '0xed3a265cebd603aa2cb9771be5c6ce10ff1e4c7a0be755527308fba56901e2b' + k,
      nonce: '0',
      blockHash: '0xdaf49361a33950a3edc5ce44353a443919f64ff83f20f6a85def84cdfb964b00',
      from: '0x0000000000000000000000000000000000000000',
      contractAddress: '0x44458837ac4036337e5ce46ce28a744e05e02016',
      to: '0x87e93ad897044086a0f0537963a6bd50711c58ac',
      tokenID: '4696',
      tokenName: 'FND NFT',
      tokenSymbol: 'FNDNFT',
      tokenDecimal: '0',
      transactionIndex: '8',
      gas: '358752',
      gasPrice: '2000000000',
      gasUsed: '321549',
      cumulativeGasUsed: '7802125',
      input: 'deprecated',
      confirmations: '1011820',
    };
  })
  .sort((a, b) => Number(a.timeStamp) - Number(b.timeStamp));

export const accountInGameInfos: AccountInGameInfo[] = [];

export const accountLockupTokens: AccountLockupToken[] = [];

export const accountStakingAssets: AccountStakingAsset[] = [];

export const accountTxHistories: AccountTxHistory[] = [
  {
    id: 'p2-1',
    image: IconEth,
    title: 'March 25, 2022',
    description: 'First Tx on Ethereum',
  },
  {
    id: 'p2-2',
    image: IconEth,
    title: 'Over 1k',
    description: 'No. of tx on Ethereum Network',
  },
];
