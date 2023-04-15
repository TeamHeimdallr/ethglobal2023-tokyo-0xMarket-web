import { useState } from 'react';
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';

import { MARKETPLACE_ABI } from '~/abi/marketplace';
import { CHAIN_ID, MARKET_CONTRACT_ADDRESS } from '~/constants';

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
    chainId: CHAIN_ID.ZKSCROLL,
    enabled: !!address,
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
    enabled: !!address,
    onSuccess: data => {
      console.log(data?.toString());
      if (data) setOwner(data?.toString());
    },
  });

  return { owner, refetch, isFetching };
};
