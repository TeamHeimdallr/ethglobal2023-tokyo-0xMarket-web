import tw from 'twin.macro';

import IconEth from '~/assets/icons/icon-eth.png';
import IconMatic from '~/assets/icons/icon-matic.png';
import { CardToken } from '~/components/cards-token';

import { CURRENCY } from '~/types';

export default {
  title: 'Components/CardToken',
  component: CardToken,
  argTypes: {},
};

export const _CardToken = () => {
  return (
    <Wrapper>
      <CardToken
        image={IconEth}
        token={{ name: CURRENCY.ETH, value: '0.00006' }}
        tokenValue={1864.93}
      />
      <CardToken
        image={IconMatic}
        token={{ name: CURRENCY.ETH, value: '99.99' }}
        tokenValue={1864.93}
      />
      <CardToken
        image={IconEth}
        token={{ name: CURRENCY.ETH, value: '0.00006' }}
        tokenValue={1864.93}
      />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex gap-24 w-full
`;
