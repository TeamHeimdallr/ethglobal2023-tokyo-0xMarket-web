import tw from 'twin.macro';

import { useAccountSbtsQuery } from '~/api/account-portfolios';

import { CardNFT } from '~/components/cards-nft';

import { useListingDataState } from '~/states/listing-data';

export const PortfolioSbts = () => {
  const { data } = useListingDataState();
  const { address } = data;

  const { data: sbts } = useAccountSbtsQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>SBTs</Title>
      </TitleWrapper>
      <CardWrapper>
        {sbts?.data?.map(sbt => (
          <CardNFT key={sbt.id} sbt image={sbt.image} nft={sbt.token} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-24
`;

const TitleWrapper = tw.div`
  flex items-center justify-between
`;

const Title = tw.div`
  font-sb-18 text-white
`;

const CardWrapper = tw.div`
  grid grid-cols-5 gap-24
`;
