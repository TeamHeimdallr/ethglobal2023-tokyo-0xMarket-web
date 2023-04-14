import tw from 'twin.macro';

import { IconDallar, IconWallet } from '~/components/icons';
import { TextField, TextFieldMultiline, TextFieldNumber } from '~/components/textfield';

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
    <TextFieldMultiline onChange={value => console.log(value)} />
    <TextFieldNumber
      prefixIcon={<IconDallar />}
      placeholder="Price"
      onChange={value => console.log(value)}
    />
  </Wrapper>
);

const Wrapper = tw.div`
  p-20 flex flex-col gap-20
`;
