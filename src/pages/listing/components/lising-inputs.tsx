import tw from 'twin.macro';

import { IconWallet } from '~/components/icons';
import { TextField, TextFieldMultiline, TextFieldNumber } from '~/components/textfield';

import { useListingDataState } from '~/states/listing-data';

export const ListingInputs = () => {
  const { setData } = useListingDataState();

  return (
    <Wrapper>
      <TextFieldMultiline
        placeholder="Give me a short title that describes the account"
        onChange={value => setData({ title: value })}
      />
      <InnerWrapper>
        <TextFieldNumber
          suffix="USDC"
          placeholder="Enter the price"
          onChange={value => setData({ price: value.floatValue })}
        />
        <TextField
          prefixIcon={<IconWallet width={24} height={24} color="#6D7684" />}
          placeholder="Receiving address"
          onChange={value => setData({ receivingAddress: value })}
        />
      </InnerWrapper>
      <TextFieldMultiline
        border
        placeholder="Provide a detailed description you'd like to mention"
        onChange={value => setData({ description: value })}
        style={{
          fontSize: '16px',
          lineHeight: '24px',
          fontWeight: 400,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-40
`;

const InnerWrapper = tw.div`
  flex flex-col gap-16
`;
