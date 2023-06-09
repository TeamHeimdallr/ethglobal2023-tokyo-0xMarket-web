import tw from 'twin.macro';

import iconEmpty from '~/assets/icons/icon-empty.png';
import { CardNFT } from '~/components/cards-nft';

import { parseNumberCommaSeperator } from '~/utils/number';

import { AccountNft } from '~/types';

interface Props {
  data?: AccountNft[];
}
export const PortfolioNfts = ({ data }: Props) => {
  const isEmpty = !data || data?.length === 0;

  const nftsValue = data?.reduce((res, d) => (res += d.tokenPrice ?? 0), 0) ?? 0;
  const totalValue = (2122.71 * nftsValue).toFixed(2);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>NFTs</Title>
        {isEmpty ? (
          <TotalValueEmpty>No assets</TotalValueEmpty>
        ) : (
          <TotalValue>
            {parseNumberCommaSeperator({ number: Number(totalValue), prefix: '$' })}
          </TotalValue>
        )}
      </TitleWrapper>
      {!isEmpty && (
        <CardWrapper>
          {data?.map(nft => {
            if (!nft.id) return;

            const image = nft.tokenNfts.contentValue?.image?.small || iconEmpty;
            const tokenName = (nft.tokenNfts.metaData.name ?? '').replace(/\s?#.*/g, '');
            const tokenId = nft.tokenNfts.tokenId.replace('#', '');
            const tokenValue = nft?.tokenPrice ?? 0;

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
                  value: tokenValue.toString(),
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
