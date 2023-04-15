import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

import { MARKETPLACE_ABI } from '~/abi/marketplace';
import { DEFAULT_CHAIN_ID, DEFAULT_DECIMAL, MARKET_CONTRACT_ADDRESS } from '~/constants';

interface ListParam {
  address: string;
  receiver: string;
  price: number;
}
export const useContractList = ({ address, receiver, price }: ListParam) => {
  const { config } = usePrepareContractWrite({
    address: MARKET_CONTRACT_ADDRESS,
    abi: MARKETPLACE_ABI,
    functionName: 'list',
    args: [address, receiver, BigInt(price * 10 ** DEFAULT_DECIMAL).toString()],
    chainId: DEFAULT_CHAIN_ID,
    enabled: !!address && ethers.utils.isAddress(address) && !!receiver && !!price,
  });
  const { data, writeAsync } = useContractWrite(config);

  const { isLoading, isSuccess, isFetching } = useWaitForTransaction({
    hash: data?.hash,
    enabled: !!data?.hash,
  });

  return { isLoading: isLoading || isFetching, isSuccess, data, writeAsync };
};
