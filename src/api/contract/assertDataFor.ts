import { ethers } from 'ethers';
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
    args: [ethers.utils.toUtf8Bytes(statement), asserter],

    chainId: DEFAULT_CHAIN_ID,
    enabled: !!statement && !!asserter,
  });
  const { data, writeAsync, isLoading: isContractWriteLoading } = useContractWrite(config);

  const { isLoading, isSuccess, isFetching, isRefetching } = useWaitForTransaction({
    hash: data?.hash,
    enabled: !!data?.hash,
  });

  return {
    isLoading: isLoading || isFetching || isContractWriteLoading || isRefetching,
    isSuccess,
    data,
    writeAsync,
  };
};
