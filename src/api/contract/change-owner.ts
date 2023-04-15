import { useState } from 'react';
import { ethers } from 'ethers';
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';

import { TRADABLE_ACCOUNT_ABI } from '~/abi/tradable-account';
import { DEFAULT_CHAIN_ID, MARKET_CONTRACT_ADDRESS } from '~/constants';

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
    chainId: DEFAULT_CHAIN_ID,
    enabled: !!address && ethers.utils.isAddress(address),
    onError(error) {
      console.log('Error', error);
    },
  });
  const { data, writeAsync } = useContractWrite(config);

  const { isLoading, isSuccess, isFetching } = useWaitForTransaction({
    hash: data?.hash,
    enabled: !!data?.hash,
  });

  return { isLoading: isLoading || isFetching, isSuccess, data, writeAsync };
};

export const useContractOwnerQuery = ({ address }: ListParam) => {
  const [owner, setOwner] = useState<string>('');

  const { refetch, isFetching } = useContractRead({
    address,
    abi: TRADABLE_ACCOUNT_ABI,
    functionName: 'owner',
    args: [],
    enabled: !!address && ethers.utils.isAddress(address),
    onSuccess: data => {
      if (data) setOwner(data?.toString());
    },
  });

  return { owner, refetch, isFetching };
};
