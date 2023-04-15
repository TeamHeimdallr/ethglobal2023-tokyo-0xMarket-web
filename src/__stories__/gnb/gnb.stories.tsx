import tw from 'twin.macro';

import { GnbMain } from '~/components/gnb';

import mockAPIs from '~/__mocks__/api';

export default {
  title: 'Components/Gnb',
  argTypes: {},
};

export const _Gnb = () => (
  <Wrapper>
    <GnbMain />
  </Wrapper>
);

const Wrapper = tw.div`
  flex flex-col gap-20
`;

_Gnb.parameters = {
  msw: { handlers: mockAPIs },
};
