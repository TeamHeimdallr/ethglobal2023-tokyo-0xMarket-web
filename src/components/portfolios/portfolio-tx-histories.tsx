import tw from 'twin.macro';

import { CardTxHistory } from '~/components/cards-tx-history';

import { AccountTxHistory } from '~/types';

interface Props {
  data?: AccountTxHistory[];
}
export const PortfolioTxHistories = ({ data }: Props) => {
  const isEmpty = data?.length === 0;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Tx History</Title>
        {isEmpty && <TotalValueEmpty>No assets</TotalValueEmpty>}
      </TitleWrapper>
      {!isEmpty && (
        <CardWrapper>
          {data?.map(history => (
            <CardTxHistory key={history.id} {...history} />
          ))}
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

const TotalValueEmpty = tw.div`
  font-r-16 text-grayscale-4
`;

const CardWrapper = tw.div`
  grid grid-cols-3 gap-24
`;
