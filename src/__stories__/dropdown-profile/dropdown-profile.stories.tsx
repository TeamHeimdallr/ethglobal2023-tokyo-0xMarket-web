import tw from 'twin.macro';
import { useAccount, useDisconnect } from 'wagmi';

import { DropdownProfile } from '~/components/dropdown-profile';

import { CURRENCY } from '~/types';

export default {
  title: 'Components/DropdownProfile',
  component: DropdownProfile,
  argTypes: {},
};

export const _DropdownProfile = () => {
  const { address } = useAccount();

  const { disconnect } = useDisconnect();
  const parsedAddress = String(address);
  const balances = [
    { currency: CURRENCY.ETH, balance: 1234567 },
    { currency: CURRENCY.USD, balance: 123456 },
  ];

  return (
    <Wrapper>
      <DropdownProfile balances={balances} disconnect={disconnect} address={parsedAddress} />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  bg-grayscale-7
`;
