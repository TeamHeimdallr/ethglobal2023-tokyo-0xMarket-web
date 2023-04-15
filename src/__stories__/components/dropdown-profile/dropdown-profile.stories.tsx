import { useAccount, useDisconnect } from 'wagmi';

import { DropdownProfile } from '~/components/dropdown-profile';

import { shortenAddress } from '~/utils/string';

import { CURRENCY } from '~/types';

export default {
  title: 'Components/DropdownProfile',
  component: DropdownProfile,
  argTypes: {},
};

export const _DropdownProfile = () => {
  const { address } = useAccount();

  const { disconnect } = useDisconnect();
  const balances = [{ currency: CURRENCY.ETH, balance: '1234567.89' }];

  return (
    <DropdownProfile
      balances={balances}
      disconnect={disconnect}
      address={address ? shortenAddress(address, 4) : 'unknown'}
    />
  );
};
