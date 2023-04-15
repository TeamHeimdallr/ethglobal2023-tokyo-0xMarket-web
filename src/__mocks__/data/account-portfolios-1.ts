import IconAxie from '~/assets/icons/icon-axie.png';
import IconTier from '~/assets/icons/icon-axie-tier.png';
import IconCharm from '~/assets/icons/icon-charm.png';
import IconDex from '~/assets/icons/icon-dex.png';
import IconEth from '~/assets/icons/icon-eth.png';
import IconMaxs from '~/assets/icons/icon-maxs.png';
import IconMoonshard from '~/assets/icons/icon-moonshard.png';
import IconNft from '~/assets/icons/icon-nft.png';
import IconRune from '~/assets/icons/icon-rune.png';
import IconSlp from '~/assets/icons/icon-slp.png';
import IconEthTokyo from '~/assets/icons/logo-ethtokyo.png';
import ImageAxieNft1 from '~/assets/images/image-axie-nft-1.png';
import ImageAxieNft2 from '~/assets/images/image-axie-nft-2.png';
import ImageAxieNft3 from '~/assets/images/image-axie-nft-3.png';

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
  formatted: '2.124',
  symbol: 'ETH',
  value: '2124000000000000000',
};

export const accountTokens: AccountTokenAll = {
  data: {
    erc20: {
      data: [
        {
          amount: '16799306000000000000',
          formattedAmount: 133.9,
          chainId: '1',
          id: '10xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc20xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f',
          tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          tokenId: '',
          tokenType: 'ERC20',
          token: {
            name: 'Uniswap',
            symbol: 'UNI',
          },
        },
        {
          amount: '647763741527175900000',
          formattedAmount: 513,
          chainId: '1',
          id: '10x5283d291dbcf85356a21ba090e6db59121208b440xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f',
          tokenAddress: '0x5283d291dbcf85356a21ba090e6db59121208b44',
          tokenId: '',
          tokenType: 'ERC20',
          token: {
            name: 'Axie Infinity',
            symbol: 'AXS',
          },
        },
      ],
    },
    erc721: {
      data: [
        {
          amount: '1',
          chainId: '1',
          id: '10xfbeef911dc5821886e1dda71586d90ed28174b7d0xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f65408',
          tokenAddress: '0xfbeef911dc5821886e1dda71586d90ed28174b7d',
          tokenId: '✨Angel✨',
          tokenType: 'ERC721',
          tokenPrice: 300,
          token: {
            name: 'Axie Infinity',
            symbol: 'KODA',
          },
          tokenNfts: {
            tokenId: '65408',
            metaData: {
              name: 'Echoes of a Dead Earth (blue)',
            },
            contentValue: {
              image: {
                medium: ImageAxieNft1,
                extraSmall: ImageAxieNft1,
                large: ImageAxieNft1,
                original: ImageAxieNft1,
                small: ImageAxieNft1,
              },
            },
          },
        },
        {
          amount: '1',
          chainId: '1',
          id: '10xfbeef911dc5821886e1dda71586d90ed28174b7d0xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f109256',
          tokenAddress: '0xfbeef911dc5821886e1dda71586d90ed28174b7d',
          tokenId: 'Devil Jack',
          tokenType: 'ERC721',
          tokenPrice: 200,
          token: {
            name: 'Axie Infinity',
            symbol: 'KODA',
          },
          tokenNfts: {
            tokenId: '109256',
            metaData: {
              name: 'RESIST',
            },
            contentValue: {
              image: {
                medium: ImageAxieNft2,
                extraSmall: ImageAxieNft2,
                large: ImageAxieNft2,
                original: ImageAxieNft2,
                small: ImageAxieNft2,
              },
            },
          },
        },
        {
          amount: '1',
          chainId: '1',
          id: '10xfbeef911dc5821886e1dda71586d90ed28174b7d0xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f27905',
          tokenAddress: '0xfbeef911dc5821886e1dda71586d90ed28174b7d',
          tokenId: 'Handsome Bob',
          tokenType: 'ERC721',
          tokenPrice: 200,
          token: {
            name: 'Axie Infinity',
            symbol: 'KODA',
          },
          tokenNfts: {
            tokenId: '27905',
            metaData: {
              name: 'Disintegration',
            },
            contentValue: {
              image: {
                medium: ImageAxieNft3,
                extraSmall: ImageAxieNft3,
                large: ImageAxieNft3,
                original: ImageAxieNft3,
                small: ImageAxieNft3,
              },
            },
          },
        },
      ],
    },
    poap: {
      data: [
        {
          amount: '1',
          tokenAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
          tokenId: '623',
          tokenType: 'ERC721',
          token: {
            name: 'POAP',
            symbol: 'EthTokyo Participation',
          },
          tokenNfts: {
            metaData: {
              name: 'EthTokyo Participation',
            },
            tokenURI: 'https://api.poap.tech/metadata/2514/308718',
            tokenImage: IconEthTokyo,
          },
        },
      ],
    },
  },
};

export const accountFirstTx: EtherscanTx = {
  blockNumber: '5782338',
  timeStamp: '1585106520',
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
  {
    id: '1',
    user: '@cbczm223',
    game: {
      name: 'Axie infinity',
      logo: IconAxie,
    },
    infos: [
      { label: 'Tier', value: 'Tiger ll', logo: IconTier },
      { label: 'Rating', value: '1470' },
      { label: 'Rank', value: '#1193' },
      { label: 'WinRate', value: '53%' },
      { label: 'Crafting Level', value: '52' },
    ],
    items: [
      {
        label: 'In-game Assets',
        items: [
          { value: '169,359 mAXS', logo: { src: IconMaxs, width: 24, height: 24 } },
          { value: '8,274 SLP', logo: { src: IconSlp, width: 24, height: 24 } },
          {
            value: '610 Moonshards',
            logo: { src: IconMoonshard, width: 24, height: 24 },
          },
          {
            value: 'Runes (Season 3)',
            logo: { src: IconRune, width: 24, height: 24 },
          },
          {
            value: 'Charms (Season 3)',
            logo: { src: IconCharm, width: 24, height: 24 },
          },
        ],
      },
    ],
  },
];

export const accountLockupTokens: AccountLockupToken[] = [];

export const accountStakingAssets: AccountStakingAsset[] = [];

export const accountTxHistories: AccountTxHistory[] = [
  {
    id: '1',
    image: IconEth,
    title: 'March 25, 2020',
    description: 'First Tx on Ethereum',
  },
  {
    id: '2',
    image: IconNft,
    title: 'Over 5k',
    description: 'No. of tx on Ethereum Network',
  },
  {
    id: '3',
    image: IconDex,
    title: 'Over $10k',
    description: 'Tx Vol. on DEX',
  },
];
