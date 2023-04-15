import tw from 'twin.macro';

import IconEth from '~/assets/icons/icon-eth.png';
import { CardStaking } from '~/components/cards-staking';

import { CURRENCY } from '~/types';

export default {
  title: 'Components/CardStaking',
  component: CardStaking,
  argTypes: {},
};

export const _CardStaking = () => {
  return (
    <Wrapper>
      <CardStaking
        image={IconEth}
        token={{ name: CURRENCY.ETH, value: '100,000' }}
        tokenValue={1864.93}
        stakedAt="Lido"
      />
      <CardStaking
        image={IconEth}
        token={{ name: CURRENCY.ETH, value: '100,000' }}
        tokenValue={1864.93}
        stakedAt="Coinbase Wrapped Staked ETH"
      />
      <CardStaking
        image={IconEth}
        token={{ name: CURRENCY.ETH, value: '100,000' }}
        tokenValue={1864.93}
        stakedAt="Rocket Pool"
      />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex gap-24 w-full
`;
