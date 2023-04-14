import tw from 'twin.macro';

import { Checkbox } from '~/components/checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {},
};

export const _Checkbox = () => (
  <Wrapper>
    <Checkbox />
    <Checkbox selected />
    <Checkbox error />
  </Wrapper>
);

const Wrapper = tw.div`
  p-20 flex gap-20
`;
