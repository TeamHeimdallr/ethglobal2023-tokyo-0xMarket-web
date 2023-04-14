import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import tw from 'twin.macro';

import { CardNFT } from '~/components/cards-nft';

import { AccountSbt } from '~/types';

interface Props {
  data?: AccountSbt[];
}
export const PortfolioSbts = ({ data }: Props) => {
  const isEmpty = !data || data?.length === 0;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>SBTs</Title>
        {isEmpty && <TotalValueEmpty>No assets</TotalValueEmpty>}
      </TitleWrapper>
      <CardWrapper>
        {data?.map(sbt => {
          if (!sbt.tokenId) return;
          return <CardSbt key={sbt.tokenAddress + sbt.tokenId} sbt={sbt} />;
        })}
      </CardWrapper>
    </Wrapper>
  );
};

interface SbtProps {
  sbt: AccountSbt;
}
const CardSbt = ({ sbt }: SbtProps) => {
  const { data } = useQuery(
    ['query', 'sbt', 'sbt-image', sbt.tokenId, sbt.tokenAddress],
    async () => (await axios.get(sbt.tokenNfts.tokenURI ?? '')).data,
    { enabled: !!sbt.tokenNfts.tokenURI, cacheTime: Infinity, staleTime: Infinity }
  );

  const image = data?.image_url;

  const tokenName = sbt.tokenNfts.metaData.name ?? '';
  const tokenId = sbt.tokenId;

  return (
    <CardNFT
      key={sbt.tokenId + sbt.tokenAddress}
      sbt
      image={image}
      nft={{
        name: tokenName,
        id: tokenId,
      }}
    />
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
const TotalValueEmpty = tw.div`
  font-r-16 text-grayscale-4
`;
const CardWrapper = tw.div`
  grid grid-cols-5 gap-24
`;
