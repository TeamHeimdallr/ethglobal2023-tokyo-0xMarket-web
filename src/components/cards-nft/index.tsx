import { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { parseNumberCommaSeperator } from '~/utils/number';

import { Balance as Price } from '~/types';

interface Props extends HTMLAttributes<HTMLDivElement> {
  image: string;
  tokenName: string;
  tokenId: number;
  sbt?: boolean;
  tokenPrice?: Price;
}

export const CardNFT = ({ image, tokenName, tokenId, tokenPrice, sbt = false, ...rest }: Props) => {
  return (
    <Wrapper {...rest}>
      <Image src={image} />
      <TokenContent>
        <TokenName>{tokenName}</TokenName>
        <TokenId>#{tokenId}</TokenId>
        {!sbt && tokenPrice && (
          <TokenPriceContent>
            <Value>
              {parseNumberCommaSeperator({ number: Number(tokenPrice.balance), decimalPoint: 2 })}
            </Value>
            <Currency>{` ${tokenPrice.currency}`}</Currency>
          </TokenPriceContent>
        )}
      </TokenContent>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-12
`;
interface ImageProps {
  src?: string;
}
const Image = styled.div<ImageProps>(({ src }) => [
  tw`
    flex-center bg-grayscale-5 bg-center bg-cover bg-no-repeat w-158 h-158 flex-shrink-0 rounded-8 border-0 ring-0
  `,
  src &&
    css`
      background-image: url(${src});
    `,
]);
const TokenContent = tw.div`
  flex flex-col gap-4
`;
const TokenName = tw.span`
  font-r-12 text-white
`;
const TokenId = tw.span`
  font-sb-16 text-white
`;
const TokenPriceContent = tw.span`
  text-grayscale-3 font-r-12
`;
const Value = tw.span``;
const Currency = tw.span``;
