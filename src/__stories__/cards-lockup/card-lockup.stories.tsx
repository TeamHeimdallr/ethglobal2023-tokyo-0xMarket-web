import tw from 'twin.macro';

import IconEth from '~/assets/icons/icon-eth.png';
import { CardLockup } from '~/components/cards-lockup';

import { CURRENCY, LOCKUP_TYPE } from '~/types';

export default {
  title: 'Components/CardLockup',
  component: CardLockup,
  argTypes: {},
};

export const _CardLockup = () => {
  return (
    <Wrapper>
      <CardLockup
        image={IconEth}
        type={LOCKUP_TYPE.VESTING}
        token={{ name: CURRENCY.ETH, value: '100,000' }}
        tokenValue={{ name: CURRENCY.USD, value: '1,864.93' }}
        totalToken={{ name: CURRENCY.ETH, value: '200,000' }}
        date={new Date()}
      />
      <CardLockup
        image={IconEth}
        type={LOCKUP_TYPE.UNLOCKED}
        token={{ name: CURRENCY.ETH, value: '100,000' }}
        tokenValue={{ name: CURRENCY.USD, value: '1,864.93' }}
        date={new Date()}
      />
      <CardLockup
        image={IconEth}
        type={LOCKUP_TYPE.AIRDROP}
        token={{ name: CURRENCY.ETH, value: '100,000' }}
        tokenValue={{ name: CURRENCY.USD, value: '1,864.93' }}
        date={new Date()}
      />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex gap-24 w-full
`;
