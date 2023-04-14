import IconEth from '~/assets/icons/icon-eth.png';
import IconStargate from '~/assets/icons/icon-stargate.png';
import IconZksync from '~/assets/icons/icon-zksync.png';
import IconZro from '~/assets/icons/icon-zro.png';

import { randomDate } from '~/utils/date';

import {
  AccountEthBalance,
  AccountTokenAll,
  AccountTxHistory,
  EtherscanNftTx,
  EtherscanTokenTx,
  EtherscanTx,
} from '~/types';
import {
  AccountInGameInfo,
  AccountLockupToken,
  AccountStakingAsset,
  CURRENCY,
  LOCKUP_TYPE,
} from '~/types';

import { price } from './token-price';

export const accountEthBalance: AccountEthBalance = {
  decimals: '18',
  formatted: '103.51',
  symbol: 'ETH',
  value: '103510000000000000000',
};
export const accountTokens: AccountTokenAll = {
  data: {
    erc20: {
      data: [
        {
          amount: '1046925200000000000000000',
          formattedAmount: 104692.52,
          chainId: '1',
          id: '10xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd60xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f',
          tokenAddress: '0xaf5191b0de278c7286d6c7cc6ab6bb8a73ba2cd6',
          tokenId: '',
          tokenType: 'ERC20',
          token: {
            name: 'StargateToken',
            symbol: 'STG',
          },
        },
      ],
    },
    erc721: {
      data: [],
    },
    poap: {
      data: [
        {
          amount: '1',
          tokenAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
          tokenId: '1670599',
          tokenType: 'ERC721',
          token: {
            name: 'POAP',
            symbol: 'The Proof of Attendance Protocol',
          },
          tokenNfts: {
            metaData: {
              name: 'zkSync Quiz 1',
            },
            tokenURI: 'https://api.poap.tech/metadata/8738/1670599',
          },
        },
      ],
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

export const accountInGameInfos: AccountInGameInfo[] = [
  // {
  //   id: '1',
  //   user: '@kenzo456',
  //   game: {
  //     name: 'Axie infinity',
  //     logo: IconAxie,
  //   },
  //   infos: [
  //     { label: 'Tier', value: 'Challenger 0', logo: IconTier },
  //     { label: 'Rating', value: '2042' },
  //     { label: 'Rank', value: '#45' },
  //     { label: 'WinRate', value: '84%' },
  //     { label: 'Crafting Level', value: '89' },
  //   ],
  //   items: [
  //     {
  //       label: 'In-game Assets',
  //       items: [
  //         { value: '169,359 mAXS', logo: { src: IconMaxs, width: 24, height: 24 } },
  //         { value: '8,274 SLP', logo: { src: IconSlp, width: 24, height: 24 } },
  //         {
  //           value: '610 Moonshards',
  //           logo: { src: IconMoonshard, width: 24, height: 24 },
  //         },
  //         {
  //           value: 'Runes (Season 3)',
  //           logo: { src: IconRune, width: 24, height: 24 },
  //         },
  //         {
  //           value: 'Charms (Season 3)',
  //           logo: { src: IconCharm, width: 24, height: 24 },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   id: '2',
  //   user: '@kenzo456',
  //   game: {
  //     name: 'The Sandbox',
  //     logo: IconSandbox,
  //   },
  //   items: [
  //     {
  //       label: 'Badges',
  //       type: 'col',
  //       items: [
  //         {
  //           value: 'Memorabilia',
  //           logo: { src: IconSportsland, width: 48, height: 48 },
  //         },
  //         {
  //           value: 'Kverse Mini Event',
  //           logo: { src: IconKverse, width: 48, height: 48 },
  //         },
  //         {
  //           value: 'Belonging Week Momorabilia',
  //           logo: { src: IconBelongingWeek, width: 48, height: 48 },
  //         },
  //         {
  //           value: 'Gucci Vault Event',
  //           logo: { src: IconGucciVault, width: 48, height: 48 },
  //         },
  //         {
  //           value: 'Sportsland Event',
  //           logo: { src: IconSportsland, width: 48, height: 48 },
  //         },
  //       ],
  //     },
  //     {
  //       label: 'My Gems',
  //       items: [
  //         {
  //           value: 'Power 5',
  //           logo: { src: IconGemPower, width: 24, height: 24 },
  //         },
  //         {
  //           value: 'Defense 10',
  //           logo: { src: IconGemDefense, width: 24, height: 24 },
  //         },
  //         { value: 'Speed 7', logo: { src: IconGemSpeed, width: 24, height: 24 } },
  //         {
  //           value: 'Magic 1',
  //           logo: { src: IconGemMagic, width: 24, height: 24 },
  //         },
  //         { value: 'Luck', logo: { src: IconGemLuck, width: 24, height: 24 } },
  //       ],
  //     },
  //     {
  //       label: 'My Catalysts',
  //       items: [
  //         {
  //           value: 'Legendary 0',
  //           logo: { src: IconCataLegendary, width: 24, height: 24 },
  //         },
  //         {
  //           value: 'Epic 7',
  //           logo: { src: IconCataEpic, width: 24, height: 24 },
  //         },
  //         { value: 'Rare 16', logo: { src: IconCataRare, width: 24, height: 24 } },
  //         {
  //           value: 'Common 55',
  //           logo: { src: IconCataCommon, width: 24, height: 24 },
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export const accountLockupTokens: AccountLockupToken[] = [
  {
    id: '1',
    image: IconZro,
    type: LOCKUP_TYPE.AIRDROP,
    token: { name: CURRENCY.ZRO, value: '1,250' },
    tokenValue: 0,
    date: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000),
  },
];

export const accountStakingAssets: AccountStakingAsset[] = [
  {
    id: '1',
    image: IconEth,
    token: { name: CURRENCY.stETH, value: '200' },
    tokenValue: 200 * Number(price.find(p => p.symbol === 'ETH')?.lastPriceUSD),
    stakedAt: 'Lido',
  },
  // {
  //   id: '2',
  //   image: IconMatic,
  //   token: { name: CURRENCY.MATIC, value: '99.99' },
  //   tokenValue: 100,
  //   stakedAt: 'Coinbase Wrapped Staked ETH',
  // },
  // {
  //   id: '3',
  //   image: IconEth,
  //   token: { name: CURRENCY.ETH, value: '100,000' },
  //   tokenValue: 1864.93,
  //   stakedAt: 'Rocket Pool',
  // },
];

export const accountTxHistories: AccountTxHistory[] = [
  {
    id: '1',
    image: IconEth,
    title: 'May 27, 2018',
    description: 'First Tx on Ethereum',
  },
  {
    id: '2',
    image: IconZksync,
    title: 'Over 1k',
    description: 'No. of Tx on zkSync',
  },
  {
    id: '3',
    image: IconZksync,
    title: 'Over $10k',
    description: 'Tx Vol. on zkSync',
  },
  {
    id: '4',
    image: IconZksync,
    title: 'Over $10k',
    description: 'Bridged to zkSync',
  },
  {
    id: '5',
    image: IconStargate,
    title: 'Over $10k',
    description: 'Tx Vol. on Stargate Bridge',
  },
];
