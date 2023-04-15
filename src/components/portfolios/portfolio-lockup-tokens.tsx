import { useMemo } from 'react';
import tw from 'twin.macro';

import { useAccountLockupTokensQuery } from '~/api/account-portfolios';

import { CardLockup } from '~/components/cards-lockup';

import { parseNumberCommaSeperator } from '~/utils/number';
import { useListingDataState } from '~/states/listing-data';

export const PortfolioLockupTokens = () => {
  const { data } = useListingDataState();
  const { address } = data;

  const { data: tokens } = useAccountLockupTokensQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  const totalValue = useMemo(
    () => tokens?.data?.reduce((res, d) => (res += d.tokenValue), 0) ?? 0,
    [tokens?.data]
  );

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Lock-up Tokens</Title>
        <TotalValue>{parseNumberCommaSeperator({ number: totalValue, prefix: '$' })}</TotalValue>
      </TitleWrapper>
      <CardWrapper>
        {tokens?.data?.map(token => (
          <CardLockup key={token.id} {...token} />
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
  grid grid-cols-3 gap-24
`;
