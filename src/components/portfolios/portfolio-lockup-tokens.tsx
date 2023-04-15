import { useMemo } from 'react';
import tw from 'twin.macro';

import { CardLockup } from '~/components/cards-lockup';

import { parseNumberCommaSeperator } from '~/utils/number';

import { AccountLockupToken } from '~/types';

interface Props {
  data?: AccountLockupToken[];
}

export const PortfolioLockupTokens = ({ data }: Props) => {
  const isEmpty = data?.length === 0;
  const totalValue = useMemo(() => data?.reduce((res, d) => (res += d.tokenValue), 0) ?? 0, [data]);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Lock-up Tokens</Title>
        {isEmpty ? (
          <TotalValueEmpty>No assets</TotalValueEmpty>
        ) : (
          <TotalValue>{parseNumberCommaSeperator({ number: totalValue, prefix: '$' })}</TotalValue>
        )}
      </TitleWrapper>
      {!isEmpty && (
        <CardWrapper>
          {data?.map(token => (
            <CardLockup key={token.id} {...token} />
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

const TotalValue = tw.div`
  font-sb-16 text-white
`;

const TotalValueEmpty = tw.div`
  font-r-16 text-grayscale-4
`;

const CardWrapper = tw.div`
  grid grid-cols-3 gap-24
`;
