import tw from 'twin.macro';

import { CardNFT } from '~/components/cards-nft';

import { AccountNftSbt } from '~/types';

interface Props {
  data?: AccountNftSbt[];
}
export const PortfolioSbts = ({ data }: Props) => {
  const isEmpty = data?.length === 0;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>SBTs</Title>
        {isEmpty && <TotalValueEmpty>No assets</TotalValueEmpty>}
      </TitleWrapper>
      <CardWrapper>
        {data?.map(sbt => (
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
const TotalValueEmpty = tw.div`
  font-r-16 text-grayscale-4
`;
const CardWrapper = tw.div`
  grid grid-cols-5 gap-24
`;
