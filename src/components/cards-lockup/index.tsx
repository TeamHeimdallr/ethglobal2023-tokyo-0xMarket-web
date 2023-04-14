import { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { format } from 'date-fns';
import tw from 'twin.macro';

import { LOCKUP_TYPE, Token } from '~/types';

import { DATE_FORMATTER } from '~/constants';

interface Props extends HTMLAttributes<HTMLDivElement> {
  image: string;
  type: LOCKUP_TYPE;

  token: Token;
  tokenValue: Token;

  totalToken?: Token;
  date: Date;
}

export const CardLockup = ({
  image,
  type,
  token,
  tokenValue,
  totalToken,
  date,
  ...rest
}: Props) => {
  const dateLabel = type === LOCKUP_TYPE.VESTING ? 'End date' : 'Claimable date';

  return (
    <Wrapper {...rest}>
      <UpperWrapper>
        <Badge>{type}</Badge>

        <TokenOuterWrapper>
          <Image src={image} />
          <TokenContent>
            <TokenAmount>{`${token.value} ${token.name}`}</TokenAmount>
            <TokenValue>{`${tokenValue.name}${tokenValue.value}`}</TokenValue>
          </TokenContent>
        </TokenOuterWrapper>
      </UpperWrapper>
      <BottomWrapper>
        <BottomInnerWraper>
          <BottomLabel>{dateLabel}</BottomLabel>
          <BottomValue>{format(date, DATE_FORMATTER.MMM_d_yyyy)}</BottomValue>
        </BottomInnerWraper>
        {totalToken && (
          <BottomInnerWraper>
            <BottomLabel>Total</BottomLabel>
            <BottomValue>{`${totalToken.value} ${totalToken.name}`}</BottomValue>
          </BottomInnerWraper>
        )}
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

const Badge = tw.div`
  flex px-6 bg-grayscale-5 rounded-4
  text-10 leading-18 text-white
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
