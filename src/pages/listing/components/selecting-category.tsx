import { useCallback } from 'react';
import tw from 'twin.macro';

import { CategoryCard } from '~/components/category-card';

import { useListingDataState } from '~/states/listing-data';

import { CATEGORIES } from '~/types';

export const SelectingCategory = () => {
  const { data, setData } = useListingDataState();

  const handleCagegorySelect = useCallback(
    (category: CATEGORIES) => {
      if (data.category === category) {
        setData({ category: undefined });
        return;
      }
      setData({ category });
    },
    [data.category, setData]
  );

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Select category</Title>
      </TitleWrapper>
      <CategoryWrapper>
        {(Object.keys(CATEGORIES) as Array<keyof typeof CATEGORIES>).map(key => (
          <CategoryCard
            key={key}
            category={CATEGORIES[key]}
            onClick={() => handleCagegorySelect(CATEGORIES[key])}
            selected={CATEGORIES[key] === data.category}
          />
        ))}
      </CategoryWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full flex-col flex-center gap-24
`;

const TitleWrapper = tw.div`
  flex-center py-10
`;

const Title = tw.div`
  font-sb-24 text-white
`;

const CategoryWrapper = tw.div`
  grid grid-cols-5 gap-24
`;
