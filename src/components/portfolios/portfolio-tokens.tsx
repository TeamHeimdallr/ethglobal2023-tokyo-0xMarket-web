import { useCallback } from 'react';
import tw from 'twin.macro';

import iconToken from '~/assets/icons/icon-coin.png';
import iconEth from '~/assets/icons/icon-eth.png';
import { CardToken } from '~/components/cards-token';

import { parseNumberCommaSeperator, parseNumberToString } from '~/utils/number';

import { AccountEthBalance, AccountToken } from '~/types';

import { tokenImages } from '~/__mocks__/data/token-images';
import { price } from '~/__mocks__/data/token-price';

interface Props {
  ethData?: AccountEthBalance;
  data?: AccountToken[];
}

export const PortfolioTokens = ({ ethData, data }: Props) => {
  const isEmpty = (!ethData && !data) || (!ethData && data?.length === 0);
  const ethTokenValue = ethData
    ? Number(price.find(p => p.symbol === ethData?.symbol)?.lastPriceUSD || 0) || 0
    : 0;
  const ethTotalValue = Number(ethData?.formatted ?? 0) * ethTokenValue;
  const totalValue = useCallback(() => {
    const tokenValues =
      data?.reduce((res, d) => {
        const tokenPrice =
          Number(price.find(p => p.symbol === d.token.symbol)?.lastPriceUSD || 0) *
            d.formattedAmount || 0;

        return (res += tokenPrice);
      }, 0) ?? 0;

    return tokenValues + ethTotalValue;
  }, [data, ethTotalValue]);

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Tokens</Title>
        {isEmpty ? (
          <TotalValueEmpty>No assets</TotalValueEmpty>
        ) : (
          <TotalValue>
            {parseNumberCommaSeperator({ number: totalValue(), prefix: '$' })}
          </TotalValue>
        )}
      </TitleWrapper>
      {!isEmpty && (
        <CardWrapper>
          {ethData && (
            <CardToken
              image={iconEth}
              token={{ name: ethData.symbol, value: ethData.formatted }}
              tokenValue={Number(ethData.formatted) * ethTokenValue}
            />
          )}
          {data?.map(token => {
            if (!token.id) return;

            const tokenSymbol = token.token.symbol;
            const tokenAmount = parseNumberToString(token.formattedAmount);
            const tokenPrice =
              Number(price.find(p => p.symbol === tokenSymbol)?.lastPriceUSD || 0) || 0;
            const tokenImage = tokenImages[tokenSymbol] || iconToken;

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
