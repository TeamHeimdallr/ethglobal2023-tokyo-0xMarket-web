import IconEth from '~/assets/icons/icon-eth.png';
import IconMatic from '~/assets/icons/icon-matic.png';

import { randomDate } from '~/utils/date';

import { AccountTokenAll, EtherscanNftTx, EtherscanTokenTx, EtherscanTx } from '~/types';
import {
  AccountInGameInfo,
  AccountLockupToken,
  AccountStakingAsset,
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

export const accountTokens: AccountTokenAll = {
  data: {
    erc20: {
      data: [
        {
          amount: '167993060000000000',
          formattedAmount: 0.16799306,
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
        {
          amount: '237307450875089901692',
          formattedAmount: 237.3074508750899,
          chainId: '1',
          id: '10xfb4481d11566b10af6ebd948ebcf4e49164361640xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f',
          tokenAddress: '0xfb4481d11566b10af6ebd948ebcf4e4916436164',
          tokenId: '',
          tokenType: 'ERC20',
          token: {
            name: 'Blow for the grave',
            symbol: 'DOT',
          },
        },
        {
          amount: '7',
          formattedAmount: 7,
          chainId: '1',
          id: '10x54fd62228c6e1234fd5fded28555ca963dcf6d260xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f',
          tokenAddress: '0x54fd62228c6e1234fd5fded28555ca963dcf6d26',
          tokenId: '',
          tokenType: 'ERC20',
          token: {
            name: '$ NFTButerin.com',
            symbol: 'NFTButerin.com',
          },
        },
        {
          amount: '1000',
          formattedAmount: 1000,
          chainId: '1',
          id: '10x67542502245eb5df64ef7ea776199ceb794010580xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f',
          tokenAddress: '0x67542502245eb5df64ef7ea776199ceb79401058',
          tokenId: '',
          tokenType: 'ERC20',
          token: {
            name: '$ UniswapLR.com',
            symbol: '$ UniswapLR.com @ 5.75',
          },
        },
        {
          amount: '1000',
          formattedAmount: 1000,
          chainId: '1',
          id: '10xc5023255ad7e0e49d207fad2bb628312cea511530xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f',
          tokenAddress: '0xc5023255ad7e0e49d207fad2bb628312cea51153',
          tokenId: '',
          tokenType: 'ERC20',
          token: {
            name: 'ApeDao.site',
            symbol: 'apedao.site',
          },
        },
        {
          amount: '1400',
          formattedAmount: 1400,
          chainId: '1',
          id: '10x7b27bd830b66b0236e0efff3b1c2b78b94433b130xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f',
          tokenAddress: '0x7b27bd830b66b0236e0efff3b1c2b78b94433b13',
          tokenId: '',
          tokenType: 'ERC20',
          token: {
            name: 'Fork-Eth.com',
            symbol: 'fork-eth.com',
          },
        },
        {
          amount: '1800000000000000000000',
          formattedAmount: 1800,
          chainId: '1',
          id: '10xc71fe3a5b360bed3be7c5dd4afccedb3136e105b0xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f',
          tokenAddress: '0xc71fe3a5b360bed3be7c5dd4afccedb3136e105b',
          tokenId: '',
          tokenType: 'ERC20',
          token: {
            name: 'mbird.fun',
            symbol: 'mbird.fun',
          },
        },
        {
          amount: '263874',
          formattedAmount: 263874,
          chainId: '1',
          id: '10xad9f583f255ea7fba4321f84cba57c3bbd2f06870xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f',
          tokenAddress: '0xad9f583f255ea7fba4321f84cba57c3bbd2f0687',
          tokenId: '',
          tokenType: 'ERC20',
          token: {
            name: 'voteFork.com',
            symbol: 'voteFork.com',
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
        {
          amount: '1',
          chainId: '1',
          id: '10x58cffa3934dddc5a537a1129e118131d0b3e37320xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f14',
          tokenAddress: '0x58cffa3934dddc5a537a1129e118131d0b3e3732',
          tokenId: '14',
          tokenType: 'ERC721',
          token: {
            name: 'Immersive Paintings',
            symbol: 'IP',
          },
          tokenNfts: {
            tokenId: '14',
            metaData: {
              name: 'The Kiss: Nude Robot Alt',
            },
            contentValue: {
              image: {
                medium:
                  'https://assets.airstack.xyz/image/nft/1/0x58cffa3934dddc5a537a1129e118131d0b3e3732/14/medium.jpg',
                extraSmall:
                  'https://assets.airstack.xyz/image/nft/1/0x58cffa3934dddc5a537a1129e118131d0b3e3732/14/extra_small.jpg',
                large:
                  'https://assets.airstack.xyz/image/nft/1/0x58cffa3934dddc5a537a1129e118131d0b3e3732/14/large.jpg',
                original:
                  'https://assets.airstack.xyz/image/nft/1/0x58cffa3934dddc5a537a1129e118131d0b3e3732/14/original_image.jpg',
                small:
                  'https://assets.airstack.xyz/image/nft/1/0x58cffa3934dddc5a537a1129e118131d0b3e3732/14/small.jpg',
              },
            },
          },
        },
        {
          amount: '1',
          chainId: '1',
          id: '10x58cffa3934dddc5a537a1129e118131d0b3e37320xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f15',
          tokenAddress: '0x58cffa3934dddc5a537a1129e118131d0b3e3732',
          tokenId: '15',
          tokenType: 'ERC721',
          token: {
            name: 'Immersive Paintings',
            symbol: 'IP',
          },
          tokenNfts: {
            tokenId: '15',
            metaData: {
              name: 'The Kiss: Nude Robot Alt',
            },
            contentValue: {
              image: {
                medium:
                  'https://assets.airstack.xyz/image/nft/1/0x58cffa3934dddc5a537a1129e118131d0b3e3732/15/medium.jpg',
                extraSmall:
                  'https://assets.airstack.xyz/image/nft/1/0x58cffa3934dddc5a537a1129e118131d0b3e3732/15/extra_small.jpg',
                large:
                  'https://assets.airstack.xyz/image/nft/1/0x58cffa3934dddc5a537a1129e118131d0b3e3732/15/large.jpg',
                original:
                  'https://assets.airstack.xyz/image/nft/1/0x58cffa3934dddc5a537a1129e118131d0b3e3732/15/original_image.jpg',
                small:
                  'https://assets.airstack.xyz/image/nft/1/0x58cffa3934dddc5a537a1129e118131d0b3e3732/15/small.jpg',
              },
            },
          },
        },
        {
          amount: '1',
          chainId: '1',
          id: '10xdfde78d2baec499fe18f2be74b6c287eed9511d70xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f15000490',
          tokenAddress: '0xdfde78d2baec499fe18f2be74b6c287eed9511d7',
          tokenId: '15000490',
          tokenType: 'ERC721',
          token: {
            name: 'BrainDrops',
            symbol: 'BRAIN',
          },
          tokenNfts: {
            tokenId: '15000490',
            metaData: {
              name: 'Sunday Service',
            },
            contentValue: {
              image: {
                medium:
                  'https://assets.airstack.xyz/image/nft/1/0xdfde78d2baec499fe18f2be74b6c287eed9511d7/15000490/medium.jpg',
                extraSmall:
                  'https://assets.airstack.xyz/image/nft/1/0xdfde78d2baec499fe18f2be74b6c287eed9511d7/15000490/extra_small.jpg',
                large:
                  'https://assets.airstack.xyz/image/nft/1/0xdfde78d2baec499fe18f2be74b6c287eed9511d7/15000490/large.jpg',
                original:
                  'https://assets.airstack.xyz/image/nft/1/0xdfde78d2baec499fe18f2be74b6c287eed9511d7/15000490/original_image.jpg',
                small:
                  'https://assets.airstack.xyz/image/nft/1/0xdfde78d2baec499fe18f2be74b6c287eed9511d7/15000490/small.jpg',
              },
            },
          },
        },
        {
          amount: '1',
          chainId: '1',
          id: '10x6f9b9f2c75125079c029f6aecde745e09cf06f5a0xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f380786771184549889',
          tokenAddress: '0x6f9b9f2c75125079c029f6aecde745e09cf06f5a',
          tokenId: '380786771184549889',
          tokenType: 'ERC721',
          token: {
            name: 'Digital Objects Artwork',
            symbol: 'DOBJ',
          },
          tokenNfts: {
            tokenId: '380786771184549889',
            metaData: {
              name: null,
            },
            contentValue: {
              image: null,
            },
          },
        },
        {
          amount: '1',
          chainId: '1',
          id: '10x24a7b986793bca0c8c5b04dc2aaffe9e8df921ad0xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f208',
          tokenAddress: '0x24a7b986793bca0c8c5b04dc2aaffe9e8df921ad',
          tokenId: '208',
          tokenType: 'ERC721',
          token: {
            name: 'Worst Case Decision Season 1 (Trailer)',
            symbol: 'WORST',
          },
          tokenNfts: {
            tokenId: '208',
            metaData: {
              name: 'Worst Case Decision Season 1 (Trailer) 208',
            },
            contentValue: {
              image: {
                medium:
                  'https://assets.airstack.xyz/image/nft/1/0x24a7b986793bca0c8c5b04dc2aaffe9e8df921ad/208/medium.jpg',
                extraSmall:
                  'https://assets.airstack.xyz/image/nft/1/0x24a7b986793bca0c8c5b04dc2aaffe9e8df921ad/208/extra_small.jpg',
                large:
                  'https://assets.airstack.xyz/image/nft/1/0x24a7b986793bca0c8c5b04dc2aaffe9e8df921ad/208/large.jpg',
                original:
                  'https://assets.airstack.xyz/image/nft/1/0x24a7b986793bca0c8c5b04dc2aaffe9e8df921ad/208/original_image.jpg',
                small:
                  'https://assets.airstack.xyz/image/nft/1/0x24a7b986793bca0c8c5b04dc2aaffe9e8df921ad/208/small.jpg',
              },
            },
          },
        },
        {
          amount: '1',
          chainId: '1',
          id: '10x6a10313c77ac58ab5bf102f74b3c4e298e5b34b10xb4496906d6ea2685e7a46a14baefae9fe3bf0d2f20111302100215201040400',
          tokenAddress: '0x6a10313c77ac58ab5bf102f74b3c4e298e5b34b1',
          tokenId: '20111302100215201040400',
          tokenType: 'ERC721',
          token: {
            name: 'Grados',
            symbol: 'GRDS3D',
          },
          tokenNfts: {
            tokenId: '20111302100215201040400',
            metaData: {
              name: 'Grados',
            },
            contentValue: {
              image: {
                medium:
                  'https://assets.airstack.xyz/image/nft/1/0x6a10313c77ac58ab5bf102f74b3c4e298e5b34b1/20111302100215201040400/medium.gif',
                extraSmall:
                  'https://assets.airstack.xyz/image/nft/1/0x6a10313c77ac58ab5bf102f74b3c4e298e5b34b1/20111302100215201040400/extra_small.gif',
                large:
                  'https://assets.airstack.xyz/image/nft/1/0x6a10313c77ac58ab5bf102f74b3c4e298e5b34b1/20111302100215201040400/large.gif',
                original:
                  'https://assets.airstack.xyz/image/nft/1/0x6a10313c77ac58ab5bf102f74b3c4e298e5b34b1/20111302100215201040400/original_image.gif',
                small:
                  'https://assets.airstack.xyz/image/nft/1/0x6a10313c77ac58ab5bf102f74b3c4e298e5b34b1/20111302100215201040400/small.gif',
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
          tokenId: '533809',
          tokenType: 'ERC721',
          token: {
            name: 'POAP',
            symbol: 'The Proof of Attendance Protocol',
          },
          tokenNfts: {
            metaData: {
              name: 'XCOPY GALLERY - LAUNCH PARTY',
            },
            tokenURI: 'https://api.poap.tech/metadata/3928/533809',
          },
        },
        {
          amount: '1',
          tokenAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
          tokenId: '533815',
          tokenType: 'ERC721',
          token: {
            name: 'POAP',
            symbol: 'The Proof of Attendance Protocol',
          },
          tokenNfts: {
            metaData: {
              name: 'XCOPY GALLERY - LAUNCH PARTY',
            },
            tokenURI: 'https://api.poap.tech/metadata/3928/533815',
          },
        },
        {
          amount: '1',
          tokenAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
          tokenId: '551536',
          tokenType: 'ERC721',
          token: {
            name: 'POAP',
            symbol: 'The Proof of Attendance Protocol',
          },
          tokenNfts: {
            metaData: {
              name: 'XCOPY GALLERY - LAUNCH PARTY',
            },
            tokenURI: 'https://api.poap.tech/metadata/3928/551536',
          },
        },
        {
          amount: '1',
          tokenAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
          tokenId: '550908',
          tokenType: 'ERC721',
          token: {
            name: 'POAP',
            symbol: 'The Proof of Attendance Protocol',
          },
          tokenNfts: {
            metaData: {
              name: 'XCOPY GALLERY - LAUNCH PARTY',
            },
            tokenURI: 'https://api.poap.tech/metadata/3928/550908',
          },
        },
        {
          amount: '1',
          tokenAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
          tokenId: '535219',
          tokenType: 'ERC721',
          token: {
            name: 'POAP',
            symbol: 'The Proof of Attendance Protocol',
          },
          tokenNfts: {
            metaData: {
              name: 'XCOPY GALLERY - LAUNCH PARTY',
            },
            tokenURI: 'https://api.poap.tech/metadata/3928/535219',
          },
        },
        {
          amount: '1',
          tokenAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
          tokenId: '550873',
          tokenType: 'ERC721',
          token: {
            name: 'POAP',
            symbol: 'The Proof of Attendance Protocol',
          },
          tokenNfts: {
            metaData: {
              name: 'XCOPY GALLERY - LAUNCH PARTY',
            },
            tokenURI: 'https://api.poap.tech/metadata/3928/550873',
          },
        },
        {
          amount: '1',
          tokenAddress: '0x22c1f6050e56d2876009903609a2cc3fef83b415',
          tokenId: '533425',
          tokenType: 'ERC721',
          token: {
            name: 'POAP',
            symbol: 'The Proof of Attendance Protocol',
          },
          tokenNfts: {
            metaData: {
              name: 'XCOPY GALLERY - LAUNCH PARTY',
            },
            tokenURI: 'https://api.poap.tech/metadata/3928/533425',
          },
        },
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

export const accountTokenTx: EtherscanTokenTx[] = [...Array(10).keys()]
  .map(() => {
    const timestamp = randomDate(new Date('2022-01-01'), new Date()).getTime();
    return {
      blockNumber: '5582998',
      timeStamp: `${timestamp}`,
      hash: '0xed3a265cebd603aa2cb9771be5c6ce10ff1e4c7a0be755527308fba56901e2b1',
      nonce: '2682',
      blockHash: '0x1f051722b99b6d5ba3ad505f0725d5851bfecd33266c26cb16cff46d2278069f',
      from: '0x0000000000000000000000000000000000000000',
      contractAddress: '0xb809b9b2dc5e93cb863176ea2d565425b03c0540',
      to: '0xfbc324f89831015a906b7daff97c7fd46c374413',
      value: '10000000000000000000000000000000',
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
  .map(() => {
    const timestamp = randomDate(new Date('2022-01-01'), new Date()).getTime();
    return {
      blockNumber: '4772010',
      timeStamp: `${timestamp}`,
      hash: '0x0d2961a16754dc4565cc004a1a9e9bc0a35b9cbc74199a439d84fa81c93a1aee',
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
