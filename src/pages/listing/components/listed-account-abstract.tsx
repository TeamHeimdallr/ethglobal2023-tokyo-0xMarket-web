import { useMemo } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { Category } from '~/components/category';
import { Checkbox } from '~/components/checkbox';

import { parseNumberCommaSeperator } from '~/utils/number';
import { useListingDataState } from '~/states/listing-data';

import { CATEGORIES } from '~/types';

import { CategoriesMap } from '~/constants';

export const ListedAccountAbstract = () => {
  const { data, setData } = useListingDataState();
  const { address, category } = data;

  const categoryData = CategoriesMap[category ?? CATEGORIES.GENERAL];
  const tokenValue = useMemo(() => {
    return 0;
  }, []);

  return (
    <Wrapper>
      <LeftWrapper>
        <Image src={categoryData.image} />
        <AddressContentWrapper>
          <AddressWrapper>
            <Category category={category} />
            {address}
          </AddressWrapper>
          <HideAddressWrapper onClick={() => setData({ hidden: !data.hidden })}>
            <Checkbox selected={data.hidden} />
            Hide address
          </HideAddressWrapper>
        </AddressContentWrapper>
      </LeftWrapper>
      <RightWrapper>
        <TokenValueLabel>Token value</TokenValueLabel>
        <TokenValue>
          {parseNumberCommaSeperator({ number: tokenValue, decimalPoint: 0, prefix: '$' })}
        </TokenValue>
      </RightWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex items-start gap-16
`;

const LeftWrapper = tw.div`
  flex flex-shrink-0 gap-20
`;
const RightWrapper = tw.div`
  flex flex-1 flex-col items-end py-5
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

const AddressContentWrapper = tw.div`
  flex flex-col gap-12 items-start
`;

const AddressWrapper = tw.div`
  flex flex-col gap-8 font-r-16 text-grayscale-2
`;

const HideAddressWrapper = tw.div`
  flex items-center gap-10 font-r-14 text-grayscale-2 clickable select-none
`;

const TokenValueLabel = tw.div`
  font-r-14 text-grayscale-3
`;

const TokenValue = tw.div`
  font-sb-20 text-white
`;
