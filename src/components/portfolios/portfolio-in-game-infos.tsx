import tw from 'twin.macro';

export const PortfolioInGameInfos = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>In-game info</Title>
      </TitleWrapper>
      <CardWrapper></CardWrapper>
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
  grid grid-cols-3 gap-24
`;
