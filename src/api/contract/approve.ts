import { useMemo, useState } from 'react';
import {
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from 'wagmi';

import { TOKEN_ABI } from '~/abi/token';
import { MARKET_CONTRACT_ADDRESS, TRADE_TOKEN_ADDRESS } from '~/constants';

export const useTokenApprove = () => {
  const [allowance, setAllowance] = useState(false);

  const { address: walletAddress } = useAccount();
  const enabled = useMemo(() => !!walletAddress, [walletAddress]);

  useContractRead({
    address: TRADE_TOKEN_ADDRESS,
    abi: TOKEN_ABI,
    functionName: 'allowance',
    args: [walletAddress, MARKET_CONTRACT_ADDRESS],
    enabled,
    onSuccess: data => {
      const bigInt = BigInt(data?.toString() ?? '0');

      setAllowance(bigInt > 0);
    },
  });

  const { config } = usePrepareContractWrite({
    address: TRADE_TOKEN_ADDRESS,
    abi: TOKEN_ABI,
    functionName: 'approve',
    args: [
      MARKET_CONTRACT_ADDRESS,
      '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    ],
    enabled: !allowance,
  });
  const { data, writeAsync } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
    enabled: !!data?.hash,
  });

  return { allowance, isLoading, isSuccess, data, writeAsync };
};

export const useAllowance = () => {
  const [allowanceAmount, setAllowanceAmount] = useState<bigint>(BigInt('0'));

  const { address: walletAddress } = useAccount();
  const enabled = useMemo(() => !!walletAddress, [walletAddress]);

  const { refetch, isFetching } = useContractRead({
    address: TRADE_TOKEN_ADDRESS,
    abi: TOKEN_ABI,
    functionName: 'allowance',
    args: [walletAddress, MARKET_CONTRACT_ADDRESS],
    enabled,
    onSuccess: data => {
      const bigInt = BigInt(data?.toString() ?? '0');

      setAllowanceAmount(bigInt);
    },
  });

  return { allowanceAmount, refetch, isFetching };
};
