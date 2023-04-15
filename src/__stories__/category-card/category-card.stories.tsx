import tw from 'twin.macro';

import { CategoryCard } from '~/components/category-card';

import { CATEGORIES } from '~/types';

export default {
  title: 'Components/CategoryCard',
  component: CategoryCard,
  argTypes: {},
};

export const _CategoryCard = () => (
  <Wrapper>
    <InnerWrapper>
      <CategoryCard category={CATEGORIES.GAME} />
      <CategoryCard category={CATEGORIES.WHITELIST} />
      <CategoryCard category={CATEGORIES.TOKEN} />
      <CategoryCard category={CATEGORIES.SBT} />
      <CategoryCard category={CATEGORIES.GENERAL} />
    </InnerWrapper>
    <InnerWrapper>
      <CategoryCard category={CATEGORIES.GAME} selected />
      <CategoryCard category={CATEGORIES.WHITELIST} selected />
      <CategoryCard category={CATEGORIES.TOKEN} selected />
      <CategoryCard category={CATEGORIES.SBT} selected />
      <CategoryCard category={CATEGORIES.GENERAL} selected />
    </InnerWrapper>
  </Wrapper>
);

const Wrapper = tw.div`
  flex flex-col gap-24
`;

const InnerWrapper = tw.div`
  flex gap-24
`;
