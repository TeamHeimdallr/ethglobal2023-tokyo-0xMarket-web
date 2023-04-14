import { useState } from 'react';
import { ethers } from 'ethers';
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';

import { MARKETPLACE_ABI } from '~/abi/marketplace';
import { DEFAULT_CHAIN_ID, MARKET_CONTRACT_ADDRESS } from '~/constants';

interface RegisterParam {
  address: string;
}
export const useContractRegister = ({ address }: RegisterParam) => {
  const { config } = usePrepareContractWrite({
    address: MARKET_CONTRACT_ADDRESS,
    abi: MARKETPLACE_ABI,
    functionName: 'register',
    args: [
      address,
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

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
    enabled: !!data?.hash,
  });

  return { isLoading, isSuccess, data, writeAsync };
};

export const useContractRegisterQuery = ({ address }: RegisterParam) => {
  const [owner, setOwner] = useState<string>('');

  const { refetch, isFetching } = useContractRead({
    address: MARKET_CONTRACT_ADDRESS,
    abi: MARKETPLACE_ABI,
    functionName: 'accountRegister',
    args: [address],
    enabled: !!address && ethers.utils.isAddress(address),
    onSuccess: data => {
      console.log(data?.toString());
      if (data) setOwner(data?.toString());
    },
  });

  return { owner, refetch, isFetching };
};
