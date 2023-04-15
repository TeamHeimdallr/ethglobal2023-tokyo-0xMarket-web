import tw from 'twin.macro';

import { IconDallar, IconWallet } from '~/components/icons';
import { TextField, TextFieldMultiline, TextFieldNumber } from '~/components/textfield';
import { TextFieldWallet } from '~/components/textfield/textfield-wallet';

export default {
  title: 'Components/Textfield',
  argTypes: {},
};

export const _Textfield = () => (
  <Wrapper>
    <TextField
      prefixIcon={<IconWallet width={24} height={24} color="#6D7684" />}
      placeholder="Receiving address"
      onChange={value => console.log(value)}
    />
    <TextFieldMultiline
      placeholder="Give me a short title that describes the account"
      onChange={value => console.log(value)}
    />
    <TextFieldMultiline
      border
      placeholder="Provide a detailed description you’d like to mention"
      onChange={value => console.log(value)}
      style={{
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 400,
      }}
    />
    <TextFieldNumber
      prefixIcon={<IconDallar />}
      placeholder="Price"
      onChange={value => console.log(value)}
    />
    <TextFieldWallet
      placeholder="Enter your account address here"
      onChange={value => console.log(value)}
    />
  </Wrapper>
);

const Wrapper = tw.div`
  p-20 flex flex-col gap-20
`;
