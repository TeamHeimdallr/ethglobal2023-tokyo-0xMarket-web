import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import tw from 'twin.macro';

import { parseNumberCommaSeperator } from '~/utils/number';

import { CATEGORIES } from '~/types';

import { CategoriesMap } from '~/constants';

import { Category } from '../category';
import { IconVerification } from '../icons';

interface Props extends HTMLMotionProps<'div'> {
  title: string;
  category?: CATEGORIES;
  price?: number;
  tokenValue?: number;
  verified?: boolean;
}

export const Card = ({ category, title, price, tokenValue, verified, ...rest }: Props) => {
  const categoryData = CategoriesMap[category ?? CATEGORIES.GENERAL];

  return (
    <Wrapper
      whileHover={{
        y: -12,
        transition: { ease: [0.4, 0, 0.2, 1], duration: 0.2 },
      }}
      {...rest}
    >
      <TopWrapper>
        <Image src={categoryData.image} />
        <ContentWrapper>
          <CategoryTitleWrapper>
            <Category category={category} />
            <Title>{title}</Title>
          </CategoryTitleWrapper>
          <TokenValueWrapper>
            <TokenValueLabel>Token value</TokenValueLabel>
            <TokenValue>
              {parseNumberCommaSeperator({ number: tokenValue ?? 0, prefix: '$' })}
            </TokenValue>
          </TokenValueWrapper>
        </ContentWrapper>
      </TopWrapper>

      <BottomWrapper>
        {verified && (
          <VerifiedWrapper>
            <IconVerification />
            <Verified>Verified</Verified>
          </VerifiedWrapper>
        )}
        <Price>{parseNumberCommaSeperator({ number: price ?? 0, suffix: 'USDC' })}</Price>
      </BottomWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)(() => [
  tw`
    flex flex-col justify-center p-32 gap-16
    w-448 h-234 bg-grayscale-7 rounded-24 clickable transition-color

    hover:bg-grayscale-6 hover:shadow-card
  `,
]);

const TopWrapper = tw.div`
  flex gap-16
`;

interface ImageProps {
  src?: string;
}
const Image = styled.div<ImageProps>(({ src }) => [
  tw`
    flex-center rounded-full bg-grayscale-5 bg-center bg-cover bg-no-repeat w-64 h-64 flex-shrink-0
  `,
  src &&
    css`
      background-color: #fff;
      background-image: url(${src});
    `,
]);

const ContentWrapper = tw.div`
  flex flex-col gap-16
`;

const CategoryTitleWrapper = tw.div`
  flex flex-col gap-8 items-start
`;

const Title = tw.div`
  font-sb-20 text-white line-clamp-2
`;

const TokenValueWrapper = tw.div`
  flex font-r-14 gap-8
`;
const TokenValueLabel = tw.div`
  text-grayscale-3
`;
const TokenValue = tw.div`
  text-white
`;

const BottomWrapper = tw.div`
  flex items-center justify-end gap-16
`;
const VerifiedWrapper = tw.div`
  flex items-center gap-6
`;
const Verified = tw.div`
  font-sb-12 text-white
`;
const Price = tw.div`
  font-sb-20 text-white w-222 overflow-hidden text-right
`;
