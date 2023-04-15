import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

import { MARKETPLACE_ABI } from '~/abi/marketplace';
import { CHAIN_ID, MARKET_CONTRACT_ADDRESS } from '~/constants';

interface BuyParam {
  address: string;
}
export const useContractBuy = ({ address }: BuyParam) => {
  const { config } = usePrepareContractWrite({
    address: MARKET_CONTRACT_ADDRESS,
    abi: MARKETPLACE_ABI,
    functionName: 'buy',
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
