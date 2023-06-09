import { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { parseNumberCommaSeperator } from '~/utils/number';

import { Token } from '~/types';

interface Props extends HTMLAttributes<HTMLDivElement> {
  image?: string;
  token: Token;
  tokenValue: number;
}

export const CardToken = ({ image, token, tokenValue, ...rest }: Props) => {
  const parsedTokenValue = Number(Number(token.value).toFixed(4));
  return (
    <Wrapper {...rest}>
      <Image src={image} />
      <TokenContent>
        <TokenAmount>{`${parsedTokenValue} ${token.name}`}</TokenAmount>
        <TokenValue>{`${parseNumberCommaSeperator({
          number: tokenValue,
          prefix: '$',
          decimalPoint: 2,
        })}`}</TokenValue>
      </TokenContent>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex p-24 rounded-8 bg-grayscale-6 gap-16 items-center flex-1
`;

interface ImageProps {
  src?: string;
}
const Image = styled.div<ImageProps>(({ src }) => [
  tw`
    flex-center rounded-full bg-grayscale-5 bg-center bg-cover bg-no-repeat w-32 h-32 flex-shrink-0
  `,
  src &&
    css`
      background-image: url(${src});
    `,
]);

const TokenContent = tw.div`
  truncate
`;

const TokenAmount = tw.div`
  font-sb-14 text-white truncate
`;
const TokenValue = tw.div`
  font-r-12 text-grayscale-3
`;
