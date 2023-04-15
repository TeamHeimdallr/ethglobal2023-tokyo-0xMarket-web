import { useMemo } from 'react';
import tw from 'twin.macro';

import { useAccountNftsQuery } from '~/api/account-portfolios';

import { CardNFT } from '~/components/cards-nft';

import { parseNumberCommaSeperator } from '~/utils/number';
import { useListingDataState } from '~/states/listing-data';

export const PortfolioNfts = () => {
  const { data } = useListingDataState();
  const { address } = data;

  const { data: nfts } = useAccountNftsQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  const totalValue = useMemo(
    () => nfts?.data?.reduce((res, d) => (res += d.tokenValue ?? 0), 0) ?? 0,
    [nfts?.data]
  );

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>NFTs</Title>
        <TotalValue>{parseNumberCommaSeperator({ number: totalValue, prefix: '$' })}</TotalValue>
      </TitleWrapper>
      <CardWrapper>
        {nfts?.data?.map(nft => (
          <CardNFT key={nft.id} image={nft.image} nft={nft.token} nftValue={nft.nftValue} />
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
const TotalValue = tw.div`
  font-sb-16 text-white
`;
const CardWrapper = tw.div`
  grid grid-cols-5 gap-24
`;
