import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { InjectedConnector } from '@wagmi/core';
import { ethers } from 'ethers';
import tw from 'twin.macro';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import { useAccount, useBalance, useConnect } from 'wagmi';

import { useAccountTokensQuery } from '~/api/account-portfolios';
import { useAllowance, useTokenApprove } from '~/api/contract/approve';
import { useContractBuy } from '~/api/contract/buy';

import { ButtonLargePrimary } from '~/components/buttons';
import { Category } from '~/components/category';

import { parseNumberCommaSeperator } from '~/utils/number';

import { Account, CATEGORIES } from '~/types';

import { price } from '~/__mocks__/data/token-price';
import { CategoriesMap, DEFAULT_CHAIN_ID, DEFAULT_DECIMAL, LISTED_LOCAL_KEY } from '~/constants';

import { BackButton } from './back-button';

export const AccountInfo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { address } = params;
  const { isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const listedAccount = useReadLocalStorage<Account[]>(LISTED_LOCAL_KEY);
  const account = (listedAccount?.find(account => account.id === address) as Account) || undefined;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setStorage] = useLocalStorage<Account[]>(LISTED_LOCAL_KEY, listedAccount ?? []);

  const categoryData = CategoriesMap[account?.category ?? CATEGORIES.GENERAL];

  const { data: ethBalance } = useBalance({
    chainId: DEFAULT_CHAIN_ID,
    address: address as `0x{string}`,
    enabled: !!address && ethers.utils.isAddress(address),
  });

  const tokenQueryAddress = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';
  const { data: tokenData } = useAccountTokensQuery(tokenQueryAddress ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!tokenQueryAddress && ethers.utils.isAddress(tokenQueryAddress),
  });

  const tokens = tokenData?.erc20?.data;

  const ethTokenValue = ethBalance
    ? Number(price.find(p => p.symbol === ethBalance?.symbol)?.lastPriceUSD || 0) || 0
    : 0;
  const ethTotalValue = Number(ethBalance?.formatted ?? 0) * ethTokenValue;

  const totalValue = () => {
    const tokenValues =
      tokens?.reduce((res, d) => {
        const tokenPrice =
          Number(price.find(p => p.symbol === d.token.symbol)?.lastPriceUSD || 0) *
            d.formattedAmount || 0;

        return (res += tokenPrice);
      }, 0) ?? 0;

    return tokenValues + ethTotalValue;
  };

  const {
    allowanceAmount,
    refetch: allowanceRefetch,
    isFetching: isAllowanceLoading,
  } = useAllowance();

  const {
    writeAsync: approveAsync,
    isLoading: isApproveLoading,
    isSuccess: approveSuccess,
  } = useTokenApprove();

  const allowance = useMemo(
    () =>
      isConnected &&
      allowanceAmount >= BigInt((account?.price ?? 0) * 10 ** DEFAULT_DECIMAL) &&
      allowanceAmount > 0,
    [isConnected, allowanceAmount, account]
  );

  const {
    writeAsync: buyAsync,
    isLoading: isBuyLoading,
    isSuccess,
  } = useContractBuy({
    address: account?.address ?? '0x',
    approve: allowance,
  });

  const isLoading = useMemo(
    () => isApproveLoading || isBuyLoading || isAllowanceLoading,
    [isAllowanceLoading, isBuyLoading, isApproveLoading]
  );

  const handleApprove = useCallback(async () => {
    if (isLoading) return;
    if (!isConnected) {
      connect();
      return;
    }
    await approveAsync?.();
  }, [approveAsync, connect, isConnected, isLoading]);

  const handleBuy = useCallback(async () => {
    if (isLoading) return;
    if (!isConnected) {
      connect();
      return;
    }
    await buyAsync?.();
  }, [buyAsync, connect, isConnected, isLoading]);

  useEffect(() => {
    allowanceRefetch();
  }, [approveSuccess, allowanceRefetch]);

  useEffect(() => {
    if (isSuccess) {
      const removed =
        listedAccount?.filter(a => a.address.toLowerCase() !== account?.address?.toLowerCase()) ??
        [];
      setStorage(removed);
      navigate('/');
    }
  }, [account?.address, isSuccess, listedAccount, navigate, setStorage]);

  return (
    <Wrapper>
      <BackButton />
      <AccountWrapper>
        <UpperWrapper>
          <UpperLeftWrapper>
            <Image src={categoryData?.image} />
            <TitleWrapper>
              <Title>
                <Category category={account?.category} />
                {account?.title}
              </Title>
            </TitleWrapper>
          </UpperLeftWrapper>

          <UpperRightWrapper>
            <TokenValueLabel>Token value</TokenValueLabel>
            <TokenValue>
              {parseNumberCommaSeperator({
                number: totalValue() || account?.tokenValue || 0,
                prefix: '$',
              })}
            </TokenValue>
          </UpperRightWrapper>
        </UpperWrapper>

        <Divider />

        <BottomWrapper>
          <Description>{account?.description}</Description>
          <BottomRightWrapper>
            <Price>
              {parseNumberCommaSeperator({
                number: account?.price ?? 0,
                suffix: ' USDC',
              })}
            </Price>
            {account &&
              (!allowance ? (
                <ButtonLargePrimary loading={isLoading} text="Approve" onClick={handleApprove} />
              ) : (
                <ButtonLargePrimary loading={isLoading} text="Buy now" onClick={handleBuy} />
              ))}
          </BottomRightWrapper>
        </BottomWrapper>
      </AccountWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col items-start gap-48
`;

const AccountWrapper = tw.div`
  flex flex-col gap-48 w-full
`;
const Divider = tw.div`
  w-full h-1 bg-grayscale-5
`;
const UpperWrapper = tw.div`
  flex gap-12 justify-between
`;
const UpperLeftWrapper = tw.div`
  flex gap-20
`;
const UpperRightWrapper = tw.div`
  flex flex-col flex-shrink-0 items-end w-279
`;

interface ImageProps {
  src?: string;
}
const Image = styled.div<ImageProps>(({ src }) => [
  tw`
    flex-center rounded-full bg-grayscale-5 bg-center bg-cover bg-no-repeat w-64 h-64 flex-shrink-0
  `,
  src &&
    css`
      background-color: #fff;
      background-image: url(${src});
    `,
]);

const TitleWrapper = tw.div`
  flex flex-col gap-12 items-start
`;

const Title = tw.div`
  flex flex-col gap-8 font-sb-20 text-white items-start
`;

const TokenValueLabel = tw.div`
  font-r-14 text-grayscale-3
`;

const TokenValue = tw.div`
  font-sb-20 text-white
`;

const BottomWrapper = tw.div`
  flex gap-16 justify-between
`;

const Description = tw.div`
  font-r-14 text-grayscale-2
`;

const BottomRightWrapper = tw.div`
  flex flex-shrink-0 flex-col items-end w-279 gap-16
`;

const Price = tw.div`
  font-sb-24 text-white
`;
