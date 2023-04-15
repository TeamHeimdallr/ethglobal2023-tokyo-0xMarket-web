import { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { CATEGORIES } from '~/types';

import { CategoriesMap } from '~/constants';

interface Props extends HTMLAttributes<HTMLDivElement> {
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
      {...rest}
    >
      <Image src={categoryData.image} />
      <Text>{categoryData.text}</Text>
    </Wrapper>
  );
};

interface WrapperProps {
  color: string;
  textColor: string;
  selected?: boolean;
}
const Wrapper = styled.div<WrapperProps>(({ color, textColor, selected }) => [
  tw`
    flex-center flex-col gap-32 bg-grayscale-7 rounded-24 text-white clickable
    w-158 h-220
  `,
  selected
    ? css`
        background-color: ${color};
        color: ${textColor};
      `
    : ``,
]);

interface ImageProps {
  src?: string;
}
const Image = styled.div<ImageProps>(({ src }) => [
  tw`
    flex-center rounded-full bg-grayscale-5 bg-center bg-cover bg-no-repeat w-80 h-80 flex-shrink-0
  `,
  src &&
    css`
      background-image: url(${src});
    `,
]);

const Text = tw.div`
  font-sb-18
`;
