import tw from 'twin.macro';

import { COLOR } from '~/assets/colors';
import { Logo } from '~/components/logo';

export default {
  title: 'Components/Logo',
  component: Logo,
  argTypes: {},
};

export const _Logo = () => (
  <Wrapper>
    <Logo />
    <Logo color={COLOR.WHITE().toHexString()} />
  </Wrapper>
);

const Wrapper = tw.div`
  p-20 flex flex-col gap-20
`;
