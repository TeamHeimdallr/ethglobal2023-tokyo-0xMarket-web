import { ethers } from 'ethers';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

import { MARKETPLACE_ABI } from '~/abi/marketplace';
import { DEFAULT_CHAIN_ID, MARKET_CONTRACT_ADDRESS } from '~/constants';

interface BuyParam {
  address: string;
  approve?: boolean;
}
export const useContractBuy = ({ address, approve }: BuyParam) => {
  const { config } = usePrepareContractWrite({
    address: MARKET_CONTRACT_ADDRESS,
    abi: MARKETPLACE_ABI,
    functionName: 'buy',
    args: [address],

    chainId: DEFAULT_CHAIN_ID,
    enabled: !!address && ethers.utils.isAddress(address) && approve,
  });
  const { data, writeAsync } = useContractWrite(config);

  const { isLoading, isSuccess, isFetching } = useWaitForTransaction({
    hash: data?.hash,
    enabled: !!data?.hash,
  });

  return { isLoading: isLoading || isFetching, isSuccess, data, writeAsync };
};
