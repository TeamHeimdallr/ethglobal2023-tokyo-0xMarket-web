import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import tw from 'twin.macro';

import { CATEGORIES } from '~/types';

import { CategoriesMap } from '~/constants';

interface Props extends HTMLMotionProps<'div'> {
  category?: CATEGORIES;
  selected?: boolean;
}

export const CategoryCard = ({ category, selected, ...rest }: Props) => {
  const categoryData = CategoriesMap[category ?? CATEGORIES.GENERAL];

  return (
    <Wrapper
      color={categoryData.color ?? '#1F2732'}
      textColor={categoryData.textColor ?? '#fff'}
      selected={selected}
      whileHover={{ y: -12, transition: { ease: [0.4, 0, 0.2, 1], duration: 0.2 } }}
      {...rest}
    >
      <Image className="category-image" src={categoryData.image} selected={selected} />
      <Text>{categoryData.text}</Text>
    </Wrapper>
  );
};

interface WrapperProps {
  color: string;
  textColor: string;
  selected?: boolean;
}
const Wrapper = styled(motion.div)<WrapperProps>(({ color, textColor, selected }) => [
  tw`
    flex-center flex-col gap-32 bg-grayscale-7 rounded-24 text-white clickable
    w-158 h-220 transition-color
  `,
  selected
    ? css`
        background-color: ${color};
        color: ${textColor};
        transform: translateY(-12px) !important;
      `
    : css`
        &:hover {
          background-color: #333d4b;
        }
      `,
]);

interface ImageProps {
  src?: string;
  selected?: boolean;
}
const Image = styled.div<ImageProps>(({ src, selected }) => [
  tw`
    flex-center rounded-full bg-black bg-center bg-cover bg-no-repeat w-80 h-80 flex-shrink-0
  `,
  src
    ? css`
        background-image: url(${src});
      `
    : ``,
  selected && tw`bg-white`,
]);

const Text = tw.div`
  font-sb-18 select-none
`;
