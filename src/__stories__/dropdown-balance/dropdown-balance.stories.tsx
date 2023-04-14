import tw from 'twin.macro';
import { useAccount, useDisconnect } from 'wagmi';

import { DropdownBalance } from '~/components/dropdown-balance';

import { CURRENCY } from '~/types';

export default {
  title: 'Components/DropdownBalance',
  component: DropdownBalance,
  argTypes: {},
};

export const _BalanceDropdown = () => {
  const { address } = useAccount();

  const { disconnect } = useDisconnect();
  const parsedAddress = String(address);
  const balances = [
    { currency: CURRENCY.ETH, balance: 1234567 },
    { currency: CURRENCY.USD, balance: 123456 },
  ];

  return (
    <Wrapper>
      <DropdownBalance balances={balances} disconnect={disconnect} address={parsedAddress} />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  bg-grayscale-7
`;
