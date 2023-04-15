import tw from 'twin.macro';

import { GnbListing, GnbMain } from '~/components/gnb';

import mockAPIs from '~/__mocks__/api';

export default {
  title: 'Components/Gnb',
  argTypes: {},
};

export const _Gnb = () => (
  <Wrapper>
    <GnbMain />
    <GnbListing />
  </Wrapper>
);

const Wrapper = tw.div`
  flex flex-col gap-20
`;

_Gnb.parameters = {
  msw: { handlers: mockAPIs },
};
