import { useCallback } from 'react';
import tw from 'twin.macro';

import { TextFieldWallet } from '~/components/textfield/textfield-wallet';

import { useListingDataState } from '~/states/listing-data';

export const ListingAccount = () => {
  const { data, setData } = useListingDataState();

  const handleAccountChange = useCallback(
    (value?: string) => setData({ address: value }),
    [setData]
  );

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Start your listing</Title>
      </TitleWrapper>
      <TextFieldWallet
        placeholder="Enter your account address here"
        value={data.address ?? ''}
        onChange={handleAccountChange}
      />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full flex-col flex-center gap-40
`;

const TitleWrapper = tw.div`
  flex-center py-10
`;

const Title = tw.div`
  font-sb-32 text-white
`;
