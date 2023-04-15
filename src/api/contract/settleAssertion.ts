import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

import { OOV3_ABI } from '~/abi/oov3';
import { DEFAULT_CHAIN_ID, OOV3_CONTRACT_ADDRESS } from '~/constants';

interface SettleAssertionParam {
  assertionId: string;
}
export const useContractSettleAssertion = ({ assertionId }: SettleAssertionParam) => {
  const { config } = usePrepareContractWrite({
    address: OOV3_CONTRACT_ADDRESS,
    abi: OOV3_ABI,
    functionName: 'asssettleAssertion',
    args: [
      assertionId,
      //   {
      //     gasLimit: 1300000, // TODO
      //   },
    ],

    chainId: DEFAULT_CHAIN_ID,
    enabled: !!assertionId,
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
