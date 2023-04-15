import { useCallback, useState } from 'react';
import tw from 'twin.macro';

import { CategoryCard } from '~/components/category-card';

import { CATEGORIES } from '~/types';

export default {
  title: 'Components/CategoryCard',
  component: CategoryCard,
  argTypes: {},
};

export const _CategoryCard = () => {
  const [selected, select] = useState<CATEGORIES | undefined>(undefined);

  const handleSelect = useCallback(
    (current: CATEGORIES) => {
      if (selected === current) {
        select(undefined);
        return;
      }

      select(current);
    },
    [selected]
  );

  return (
    <Wrapper>
      <InnerWrapper>
        {(Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>).map(key => (
          <CategoryCard
            key={key}
            category={CATEGORIES[key]}
            onClick={() => handleSelect(CATEGORIES[key])}
            selected={CATEGORIES[key] === selected}
          />
        ))}
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-24
`;

const InnerWrapper = tw.div`
  flex gap-24
`;
