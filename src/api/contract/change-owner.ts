import { useState } from 'react';
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';

import { TRADABLE_ACCOUNT_ABI } from '~/abi/tradable-account';
import { CHAIN_ID, MARKET_CONTRACT_ADDRESS } from '~/constants';

interface ListParam {
  address: `0x${string}`;
}
export const useContractDeposit = ({ address }: ListParam) => {
  const { config } = usePrepareContractWrite({
    address,
    abi: TRADABLE_ACCOUNT_ABI,
    functionName: 'changeOwner',
    args: [
      MARKET_CONTRACT_ADDRESS,
      {
        gasLimit: 1300000, // TODO
      },
    ],
    chainId: CHAIN_ID.ZKSCROLL,
    enabled: !!address && address !== '0x',
    onError(error) {
      console.log('Error', error);
    },
  });
  const { data, writeAsync } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
    enabled: !!data?.hash,
  });

  return { isLoading, isSuccess, data, writeAsync };
};

export const useContractOwnerQuery = ({ address }: ListParam) => {
  const [owner, setOwner] = useState<string>('');

  const { refetch, isFetching } = useContractRead({
    address,
    abi: TRADABLE_ACCOUNT_ABI,
    functionName: 'owner',
    args: [],
    enabled: !!address && address !== '0x',
    onSuccess: data => {
      console.log(data?.toString());
      if (data) setOwner(data?.toString());
    },
  });

  return { owner, refetch, isFetching };
};
