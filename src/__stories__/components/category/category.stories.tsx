import tw from 'twin.macro';

import { Category } from '~/components/category';

import { CATEGORIES } from '~/types';

export default {
  title: 'Components/Category',
  component: Category,
  argTypes: {},
};

export const _Category = () => (
  <Wrapper>
    <Category category={CATEGORIES.GAME} />
    <Category category={CATEGORIES.WHITELIST} />
    <Category category={CATEGORIES.TOKEN} />
    <Category category={CATEGORIES.SBT} />
    <Category category={CATEGORIES.GENERAL} />
  </Wrapper>
);

const Wrapper = tw.div`
  p-20 flex gap-20
`;
