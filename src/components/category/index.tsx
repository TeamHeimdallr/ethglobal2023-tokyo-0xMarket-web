import { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { CATEGORIES } from '~/types';

import { CategoriesMap } from '~/constants';

interface Props extends HTMLAttributes<HTMLDivElement> {
  category?: CATEGORIES;
}

export const Category = ({ category, ...rest }: Props) => {
  const categoryData = CategoriesMap[category ?? CATEGORIES.GENERAL];

  return (
    <Wrapper color={categoryData.color} {...rest}>
      {categoryData.text}
    </Wrapper>
  );
};

interface WrapperProps {
  color?: string;
}
const Wrapper = styled.div<WrapperProps>(({ color }) => [
  tw`
    flex-center px-12 py-2 rounded-12 font-sb-12 text-white
  `,
  color &&
    css`
      background-color: ${color};
    `,
]);
