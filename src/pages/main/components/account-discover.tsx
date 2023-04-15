import tw from 'twin.macro';

import { useAccountDiscoversQuery } from '~/api/accounts';

import { Card } from '~/components/cards';

export const AccountDiscovers = () => {
  const { data } = useAccountDiscoversQuery({
    cacheTime: Infinity,
    staleTime: Infinity,
  });
  const accountDiscovers = data?.data;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Discover Accounts</Title>
      </TitleWrapper>
      <CardWrapper>
        {accountDiscovers?.map(accountDiscover => (
          <Card key={accountDiscover.id} {...accountDiscover} />
        ))}
      </CardWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-full flex-col flex-center gap-40
`;

const TitleWrapper = tw.div`
  flex-center py-10
`;

const Title = tw.div`
  font-sb-28 text-white
`;

const CardWrapper = tw.div`
  grid grid-cols-3 gap-y-32 gap-x-24
`;
