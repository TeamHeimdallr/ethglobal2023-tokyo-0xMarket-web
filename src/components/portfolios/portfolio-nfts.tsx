import { useMemo } from 'react';
import tw from 'twin.macro';

import { CardNFT } from '~/components/cards-nft';

import { parseNumberCommaSeperator } from '~/utils/number';

import { AccountNft } from '~/types';

interface Props {
  data?: AccountNft[];
}
export const PortfolioNfts = ({ data }: Props) => {
  const isEmpty = !data || data?.length === 0;

  const totalValue = useMemo(
    // () => data?.reduce((res, d) => (res += d.tokenValue ?? 0), 0) ?? 0,
    () => 0,
    []
  );

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>NFTs</Title>
        {isEmpty ? (
          <TotalValueEmpty>No assets</TotalValueEmpty>
        ) : (
          <TotalValue>{parseNumberCommaSeperator({ number: totalValue, prefix: '$' })}</TotalValue>
        )}
      </TitleWrapper>
      {!isEmpty && (
        <CardWrapper>
          {data?.map(nft => {
            const image = nft.tokenNfts.contentValue?.image?.small || '';
            const tokenName = (nft.tokenNfts.metaData.name ?? '').replace(/\s?#.*/g, '');
            const tokenId = nft.tokenNfts.tokenId.replace('#', '');
            const tokenValue = '0';

            return (
              <CardNFT
                key={nft.id}
                image={image}
                nft={{
                  name: tokenName,
                  id: tokenId,
                }}
                nftValue={{
                  name: 'ETH',
                  value: tokenValue,
                }}
              />
            );
          })}
        </CardWrapper>
      )}
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
const TotalValueEmpty = tw.div`
  font-r-16 text-grayscale-4
`;

const CardWrapper = tw.div`
  grid grid-cols-5 gap-24
`;
