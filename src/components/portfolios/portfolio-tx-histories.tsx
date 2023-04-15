import tw from 'twin.macro';

import { useAccountTxHistoriesQuery } from '~/api/account-portfolios';

import { CardTxHistory } from '~/components/cards-tx-history';

import { useListingDataState } from '~/states/listing-data';

export const PortfolioTxHistories = () => {
  const { data } = useListingDataState();
  const { address } = data;

  const { data: histories } = useAccountTxHistoriesQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Tx History</Title>
      </TitleWrapper>
      <CardWrapper>
        {histories?.data?.map(history => (
          <CardTxHistory key={history.id} {...history} />
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
  grid grid-cols-3 gap-24
`;
