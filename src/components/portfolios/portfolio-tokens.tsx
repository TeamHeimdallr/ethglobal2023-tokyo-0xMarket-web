import { useMemo } from 'react';
import tw from 'twin.macro';

import { CardToken } from '~/components/cards-token';

import { parseNumberCommaSeperator, parseNumberToString } from '~/utils/number';

import { AccountToken } from '~/types';

import { tokenImages } from '~/__mocks__/data/token-images';
import { price } from '~/__mocks__/data/token-price';

interface Props {
  data?: AccountToken[];
}

export const PortfolioTokens = ({ data }: Props) => {
  const isEmpty = data?.length === 0;
  const totalValue = useMemo(
    () =>
      data?.reduce((res, d) => {
        const tokenPrice =
          Number(price.find(p => p.symbol === d.token.symbol)?.lastPriceUSD || 0) || 0;

        return (res += tokenPrice);
      }, 0) ?? 0,
    [data]
  );

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Tokens</Title>
        {isEmpty ? (
          <TotalValueEmpty>No assets</TotalValueEmpty>
        ) : (
          <TotalValue>{parseNumberCommaSeperator({ number: totalValue, prefix: '$' })}</TotalValue>
        )}
      </TitleWrapper>
      {!isEmpty && (
        <CardWrapper>
          {data?.map(token => {
            const tokenSymbol = token.token.symbol;
            const tokenAmount = parseNumberToString(token.formattedAmount);
            const tokenPrice =
              Number(price.find(p => p.symbol === tokenSymbol)?.lastPriceUSD || 0) || 0;
            const tokenImage = tokenImages[tokenSymbol];

            const tokenValue = token.formattedAmount * tokenPrice;

            return (
              <CardToken
                key={token.id}
                image={tokenImage}
                token={{ name: tokenSymbol, value: tokenAmount }}
                tokenValue={tokenValue}
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
  grid grid-cols-3 gap-24
`;
