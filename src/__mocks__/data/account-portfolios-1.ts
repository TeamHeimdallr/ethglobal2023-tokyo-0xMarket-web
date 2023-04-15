import IconArbitrum from '~/assets/icons/icon-arbitrum.png';
import IconAxie from '~/assets/icons/icon-axie.png';
import IconTier from '~/assets/icons/icon-axie-tier.png';
import IconBelongingWeek from '~/assets/icons/icon-belonging-week-memorabilia.png';
import IconCataCommon from '~/assets/icons/icon-cata-common.png';
import IconCataEpic from '~/assets/icons/icon-cata-epic.png';
import IconCataLegendary from '~/assets/icons/icon-cata-legendary.png';
import IconCataRare from '~/assets/icons/icon-cata-rare.png';
import IconCharm from '~/assets/icons/icon-charm.png';
import IconDex from '~/assets/icons/icon-dex.png';
import IconEth from '~/assets/icons/icon-eth.png';
import IconGemDefense from '~/assets/icons/icon-gem-defense.png';
import IconGemLuck from '~/assets/icons/icon-gem-luck.png';
import IconGemMagic from '~/assets/icons/icon-gem-magic.png';
import IconGemPower from '~/assets/icons/icon-gem-power.png';
import IconGemSpeed from '~/assets/icons/icon-gem-speed.png';
import IconGucciVault from '~/assets/icons/icon-gucci-vault.png';
import IconKverse from '~/assets/icons/icon-kverse.png';
import IconMatic from '~/assets/icons/icon-matic.png';
import IconMaxs from '~/assets/icons/icon-maxs.png';
import IconMoonshard from '~/assets/icons/icon-moonshard.png';
import IconNft from '~/assets/icons/icon-nft.png';
import IconRune from '~/assets/icons/icon-rune.png';
import IconSandbox from '~/assets/icons/icon-sanbox.png';
import IconSlp from '~/assets/icons/icon-slp.png';
import IconSportsland from '~/assets/icons/icon-sportsland-event.png';
import IconZksync from '~/assets/icons/icon-zksync.png';

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

export const accountEthBalance: AccountEthBalance = {
  decimals: '18',
  formatted: '123.45',
  symbol: 'ETH',
  value: '123450000000000000000',
};
export const accountTokens: AccountTokenAll = {
  data: {
    erc20: {
      data: [
        {
          amount: '16799306000000000000',
          formattedAmount: 16.799306,
          chainId: '1',
          id: '10xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc20xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f',
          tokenAddress: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
          tokenId: '',
          tokenType: 'ERC20',
          token: {
            name: 'Wrapped Ether',
            symbol: 'WETH',
          },
        },
        {
          amount: '647763741527175900000',
          formattedAmount: 647.7637415271759,
          chainId: '1',
          id: '10x5283d291dbcf85356a21ba090e6db59121208b440xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f',
          tokenAddress: '0x5283d291dbcf85356a21ba090e6db59121208b44',
          tokenId: '',
          tokenType: 'ERC20',
          token: {
            name: 'Blur',
            symbol: 'BLUR',
          },
        },
        {
          amount: '7000',
          formattedAmount: 7000,
          chainId: '1',
          id: '10xc1c8c49b0405f6cffba5351179befb2d8a2c776c0xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f',
          tokenAddress: '0xc1c8c49b0405f6cffba5351179befb2d8a2c776c',
          tokenId: '',
          tokenType: 'ERC20',
          token: {
            name: 'staked eth',
            symbol: 'stETH',
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
          tokenId: '65408',
          tokenType: 'ERC721',
          token: {
            name: 'KnownOriginDigitalAsset',
            symbol: 'KODA',
          },
          tokenNfts: {
            tokenId: '65408',
            metaData: {
              name: 'Echoes of a Dead Earth (blue)',
            },
            contentValue: {
              image: {
                medium:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/65408/medium.gif',
                extraSmall:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/65408/extra_small.gif',
                large:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/65408/large.gif',
                original:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/65408/original_image.gif',
                small:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/65408/small.gif',
              },
            },
          },
        },
        {
          amount: '1',
          chainId: '1',
          id: '10xfbeef911dc5821886e1dda71586d90ed28174b7d0xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f109256',
          tokenAddress: '0xfbeef911dc5821886e1dda71586d90ed28174b7d',
          tokenId: '109256',
          tokenType: 'ERC721',
          token: {
            name: 'KnownOriginDigitalAsset',
            symbol: 'KODA',
          },
          tokenNfts: {
            tokenId: '109256',
            metaData: {
              name: 'RESIST',
            },
            contentValue: {
              image: {
                medium:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/109256/medium.gif',
                extraSmall:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/109256/extra_small.gif',
                large:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/109256/large.gif',
                original:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/109256/original_image.gif',
                small:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/109256/small.gif',
              },
            },
          },
        },
        {
          amount: '1',
          chainId: '1',
          id: '10xfbeef911dc5821886e1dda71586d90ed28174b7d0xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f27905',
          tokenAddress: '0xfbeef911dc5821886e1dda71586d90ed28174b7d',
          tokenId: '27905',
          tokenType: 'ERC721',
          token: {
            name: 'KnownOriginDigitalAsset',
            symbol: 'KODA',
          },
          tokenNfts: {
            tokenId: '27905',
            metaData: {
              name: 'Disintegration',
            },
            contentValue: {
              image: {
                medium:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/27905/medium.gif',
                extraSmall:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/27905/extra_small.gif',
                large:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/27905/large.gif',
                original:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/27905/original_image.gif',
                small:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/27905/small.gif',
              },
            },
          },
        },
        {
          amount: '1',
          chainId: '1',
          id: '10xfbeef911dc5821886e1dda71586d90ed28174b7d0xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f104440',
          tokenAddress: '0xfbeef911dc5821886e1dda71586d90ed28174b7d',
          tokenId: '104440',
          tokenType: 'ERC721',
          token: {
            name: 'KnownOriginDigitalAsset',
            symbol: 'KODA',
          },
          tokenNfts: {
            tokenId: '104440',
            metaData: {
              name: 'Gobshites',
            },
            contentValue: {
              image: {
                medium:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/104440/medium.gif',
                extraSmall:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/104440/extra_small.gif',
                large:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/104440/large.gif',
                original:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/104440/original_image.gif',
                small:
                  'https://assets.airstack.xyz/image/nft/1/0xfbeef911dc5821886e1dda71586d90ed28174b7d/104440/small.gif',
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
          tokenId: '308718',
          tokenType: 'ERC721',
          token: {
            name: 'POAP',
            symbol: 'The Proof of Attendance Protocol',
          },
          tokenNfts: {
            metaData: {
              name: 'Zenft Garden Society: Genesis',
            },
            tokenURI: 'https://api.poap.tech/metadata/2514/308718',
          },
        },
        {
          amount: '1',
          tokenAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
          tokenId: '3345887',
          tokenType: 'ERC721',
          token: {
            name: 'POAP',
            symbol: 'The Proof of Attendance Protocol',
          },
          tokenNfts: {
            metaData: {
              name: 'KnownOrigin X-MESS party! 29th Dec. 2021',
            },
            tokenURI: 'https://api.poap.tech/metadata/20034/3345887',
          },
        },
        {
          amount: '1',
          tokenAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
          tokenId: '551825',
          tokenType: 'ERC721',
          token: {
            name: 'POAP',
            symbol: 'The Proof of Attendance Protocol',
          },
          tokenNfts: {
            metaData: {
              name: 'XCOPY GALLERY - LAUNCH PARTY',
            },
            tokenURI: 'https://api.poap.tech/metadata/3928/551825',
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
  {
    id: '1',
    user: '@kenzo456',
    game: {
      name: 'Axie infinity',
      logo: IconAxie,
    },
    infos: [
      { label: 'Tier', value: 'Challenger 0', logo: IconTier },
      { label: 'Rating', value: '2042' },
      { label: 'Rank', value: '#45' },
      { label: 'WinRate', value: '84%' },
      { label: 'Crafting Level', value: '89' },
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
  {
    id: '2',
    user: '@kenzo456',
    game: {
      name: 'The Sandbox',
      logo: IconSandbox,
    },
    items: [
      {
        label: 'Badges',
        type: 'col',
        items: [
          {
            value: 'Memorabilia',
            logo: { src: IconSportsland, width: 48, height: 48 },
          },
          {
            value: 'Kverse Mini Event',
            logo: { src: IconKverse, width: 48, height: 48 },
          },
          {
            value: 'Belonging Week Momorabilia',
            logo: { src: IconBelongingWeek, width: 48, height: 48 },
          },
          {
            value: 'Gucci Vault Event',
            logo: { src: IconGucciVault, width: 48, height: 48 },
          },
          {
            value: 'Sportsland Event',
            logo: { src: IconSportsland, width: 48, height: 48 },
          },
        ],
      },
      {
        label: 'My Gems',
        items: [
          {
            value: 'Power 5',
            logo: { src: IconGemPower, width: 24, height: 24 },
          },
          {
            value: 'Defense 10',
            logo: { src: IconGemDefense, width: 24, height: 24 },
          },
          { value: 'Speed 7', logo: { src: IconGemSpeed, width: 24, height: 24 } },
          {
            value: 'Magic 1',
            logo: { src: IconGemMagic, width: 24, height: 24 },
          },
          { value: 'Luck', logo: { src: IconGemLuck, width: 24, height: 24 } },
        ],
      },
      {
        label: 'My Catalysts',
        items: [
          {
            value: 'Legendary 0',
            logo: { src: IconCataLegendary, width: 24, height: 24 },
          },
          {
            value: 'Epic 7',
            logo: { src: IconCataEpic, width: 24, height: 24 },
          },
          { value: 'Rare 16', logo: { src: IconCataRare, width: 24, height: 24 } },
          {
            value: 'Common 55',
            logo: { src: IconCataCommon, width: 24, height: 24 },
          },
        ],
      },
    ],
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
