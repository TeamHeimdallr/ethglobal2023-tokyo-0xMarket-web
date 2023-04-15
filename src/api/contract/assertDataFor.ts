import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';

import { STATEMENT_VERIFIER_ABI } from '~/abi/statement-verifier';
import { DEFAULT_CHAIN_ID, STATEMENT_VERIFIER_CONTRACT_ADDRESS } from '~/constants';

interface AssertParam {
  statement: string;
  asserter: string;
}
export const useContractAssert = ({ statement, asserter }: AssertParam) => {
  const { config } = usePrepareContractWrite({
    address: STATEMENT_VERIFIER_CONTRACT_ADDRESS,
    abi: STATEMENT_VERIFIER_ABI,
    functionName: 'assertDataFor',
    args: [
      statement,
      asserter,
      //   {
      //     gasLimit: 1300000, // TODO
      //   },
    ],

    chainId: DEFAULT_CHAIN_ID,
    enabled: !!statement && !!asserter,
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
