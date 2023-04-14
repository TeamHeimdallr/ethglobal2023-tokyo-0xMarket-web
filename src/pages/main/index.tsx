import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import request, { gql } from 'graphql-request';
import tw from 'twin.macro';

import { Footer } from '~/components/footer';
import { GnbMain } from '~/components/gnb';

import { AccountDiscovers } from './components/account-discover';

const MainPage = () => {
  const query = gql`
    query tokens($address: Identity!) {
      erc20: TokenBalances(
        input: {
          filter: { owner: { _in: [$address] }, tokenType: { _in: [ERC20] } }
          limit: 10
          blockchain: ethereum
        }
      ) {
        data: TokenBalance {
          amount
          formattedAmount
          chainId
          id
          tokenAddress
          tokenId
          tokenType
          token {
            name
            symbol
          }
        }
      }
      erc721: TokenBalances(
        input: {
          filter: {
            owner: { _in: [$address] }
            tokenType: { _in: [ERC721] }
            tokenAddress: { _nin: ["0x22C1f6050E56d2876009903609a2cC3fEf83B415"] }
          }
          limit: 10
          blockchain: ethereum
        }
      ) {
        data: TokenBalance {
          amount
          chainId
          id
          tokenAddress
          tokenId
          tokenType
          token {
            name
            symbol
          }
          tokenNfts {
            tokenId
            metaData {
              name
            }
            contentValue {
              image {
                medium
                extraSmall
                large
                original
                small
              }
            }
          }
        }
      }
      poap: TokenBalances(
        input: {
          filter: {
            owner: { _in: [$address] }
            tokenAddress: { _eq: "0x22C1f6050E56d2876009903609a2cC3fEf83B415" }
          }
          limit: 10
          blockchain: ethereum
        }
      ) {
        data: TokenBalance {
          amount
          tokenAddress
          tokenId
          tokenType
          token {
            name
            symbol
          }
          tokenNfts {
            metaData {
              name
            }
            tokenURI
          }
        }
      }
    }
  `;

  const transfers = gql`
    query transfers($address: Identity!) {
      transfers: TokenTransfers(
        input: { filter: { from: { _eq: $address } }, blockchain: ethereum, limit: 50 }
      ) {
        TokenTransfer {
          amount
          formattedAmount
          blockTimestamp
          token {
            symbol
            name
            decimals
          }
          from {
            addresses
          }
          to {
            addresses
          }
          type
        }
      }
    }
  `;

  const { data: token } = useQuery(
    ['gql', 'token'],
    async () =>
      request('https://api.airstack.xyz/gql/4tITyVlBrB', query, {
        // address: 'vitalik.eth',
        address: '0xb4496906D6EA2685E7A46A14BAEfae9fe3bF0D2f',
      }),
    { enabled: false }
  );

  const { data: totalTransfer } = useQuery(
    ['gql', 'transfer'],
    async () =>
      request('https://api.airstack.xyz/gql/4tITyVlBrB', transfers, {
        address: '0xe3C1B623c2F51b243E174D4498b07B3C97fda871',
      }),
    { enabled: false }
  );
  // amount 1k 10k 100k

  const { data: ethBalance } = useQuery(
    ['query', 'eth-token'],
    async () =>
      (
        await axios.get(
          'https://api-goerli.etherscan.io/api?module=account&action=balance&address=0x48DBa2D1b6C89Bf8234C2B63554369aDC7Ae3258&tag=latest&apikey=HPWTPRKCEMT3JFRCYYPETD3694ISJRYW6F'
        )
      ).data,
    { enabled: false }
  );

  const { data: firstTx } = useQuery(
    ['query', 'first-tx'],
    async () =>
      (
        await axios.get(
          'https://api-goerli.etherscan.io/api?module=account&action=txlist&address=0xCEB67769c63cfFc6C8a6c68e85aBE1Df396B7aDA&startblock=0&page=1&offset=1&sort=asc&apikey=HPWTPRKCEMT3JFRCYYPETD3694ISJRYW6F'
        )
      ).data,
    { enabled: false }
  );

  const { data: txCounts } = useQuery(
    ['query', 'tx-counts', 'all'],
    async () =>
      (
        await axios.get(
          'https://api-goerli.etherscan.io/api?module=account&action=tokentx&address=0xfbc324f89831015a906b7daff97c7fd46c374413&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=HPWTPRKCEMT3JFRCYYPETD3694ISJRYW6F'
        )
      ).data,
    { enabled: false }
  );
  // 100 1k

  const { data: nftTxCounts } = useQuery(
    ['query', 'tx-counts', 'nft'],
    async () =>
      (
        await axios.get(
          'https://api-goerli.etherscan.io/api?module=account&action=tokennfttx&address=0x865E06473466cb94514C4003eCE2c78ee62B43A7&page=1&offset=100&startblock=0&endblock=99999999&sort=asc&apikey=HPWTPRKCEMT3JFRCYYPETD3694ISJRYW6F'
        )
      ).data,
    { enabled: false }
  );
  // 10 100 1k

  return (
    <Wrapper>
      <GnbMain />
      <ContentWrapper>
        <AccountDiscovers />
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-full flex flex-col
  min-w-1440 min-h-960
`;
const ContentWrapper = tw.div`
  w-full h-full pt-200 pb-120 px-24 flex-center flex-1 flex-shrink-0
`;

export default MainPage;
