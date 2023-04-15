import { useState } from 'react';
import { useContractRead } from 'wagmi';

import { MARKETPLACE_ABI } from '~/abi/marketplace';
import { MARKET_CONTRACT_ADDRESS } from '~/constants';

export const useGetAccounts = () => {
  const [accounts, setAccounts] = useState<string[]>([]);
  const { refetch, isFetching } = useContractRead({
    address: MARKET_CONTRACT_ADDRESS,
    abi: MARKETPLACE_ABI,
    functionName: 'getAccounts',
    args: [],
    onSuccess: (data: string[]) => {
      if (data) setAccounts(data);
    },
  });

  return { accounts, refetch, isFetching };
};
