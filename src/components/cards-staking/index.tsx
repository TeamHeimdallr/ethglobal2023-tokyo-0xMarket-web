import { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { Token } from '~/types';

interface Props extends HTMLAttributes<HTMLDivElement> {
  image: string;
  token: Token;
  tokenValue: number;
  stakedAt: string;
}

export const CardStaking = ({ image, token, tokenValue, stakedAt, ...rest }: Props) => {
  return (
    <Wrapper {...rest}>
      <UpperWrapper>
        <TokenOuterWrapper>
          <Image src={image} />
          <TokenContent>
            <TokenAmount>{`${token.value} ${token.name}`}</TokenAmount>
            <TokenValue>{`$${tokenValue}`}</TokenValue>
          </TokenContent>
        </TokenOuterWrapper>
      </UpperWrapper>
      <BottomWrapper>
        <BottomInnerWraper>
          <BottomLabel>Staked at</BottomLabel>
          <BottomValue>{stakedAt}</BottomValue>
        </BottomInnerWraper>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col py-20 px-24 rounded-8 bg-grayscale-6 gap-16 flex-1
`;

const UpperWrapper = tw.div`
  flex flex-col gap-6 items-start 
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

const TokenOuterWrapper = tw.div`
  flex gap-16 items-center
`;
const TokenContent = tw.div`
  flex flex-col
`;

const TokenAmount = tw.div`
  font-sb-14 text-white
`;
const TokenValue = tw.div`
  font-r-12 text-grayscale-3
`;

const BottomWrapper = tw.div`
  flex gap-16
`;

const BottomInnerWraper = tw.div`
  flex flex-col flex-1
`;

const BottomLabel = tw.div`
  font-r-12 text-grayscale-3
`;
const BottomValue = tw.div`
  font-r-12 text-grayscale-2
`;
