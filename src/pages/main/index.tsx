import { useQuery } from '@tanstack/react-query';
import request, { gql } from 'graphql-request';
import tw from 'twin.macro';

import { Footer } from '~/components/footer';
import { GnbMain } from '~/components/gnb';

import { AccountDiscovers } from './components/account-discover';

const MainPage = () => {
  // filter: { owner: { _in: [address: $address] }, tokenType: { _in: [ERC1155, ERC721, ERC20] } }
  const query = gql`
    query AllToken($address: Identity!) {
      TokenBalances(
        input: {
          filter: { owner: { _in: [$address] }, tokenType: { _in: [ERC1155, ERC721, ERC20] } }
          limit: 50
          blockchain: ethereum
        }
      ) {
        TokenBalance {
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
        }
      }
    }
  `;

  const { data } = useQuery(
    ['gql'],
    async () =>
      request('https://api.airstack.xyz/gql/4tITyVlBrB', query, {
        address: 'vitalik.eth',
      }),
    { enabled: false }
  );

  console.log(data);

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
