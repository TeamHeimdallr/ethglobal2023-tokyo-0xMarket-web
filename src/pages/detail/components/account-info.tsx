import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { InjectedConnector } from '@wagmi/core';
import tw from 'twin.macro';
import { useAccount, useConnect } from 'wagmi';

import { useAccountQuery } from '~/api/accounts';
import { useAllowance, useTokenApprove } from '~/api/contract/approve';
import { useContractBuy } from '~/api/contract/buy';

import { ButtonLargePrimary } from '~/components/buttons';
import { Category } from '~/components/category';

import { parseNumberCommaSeperator } from '~/utils/number';

import { CATEGORIES } from '~/types';

import { CategoriesMap, DEFAULT_DECIMAL } from '~/constants';

import { BackButton } from './back-button';

export const AccountInfo = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const { isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  const { data } = useAccountQuery(id ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!id,
  });

  const account = data?.data;
  const categoryData = CategoriesMap[account?.category ?? CATEGORIES.GENERAL];

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
    if (isSuccess) navigate('/');
  }, [isSuccess, navigate]);

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
                number: account?.tokenValue ?? 0,
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
            {!allowance ? (
              <ButtonLargePrimary loading={isLoading} text="Approve" onClick={handleApprove} />
            ) : (
              <ButtonLargePrimary loading={isLoading} text="Buy now" onClick={handleBuy} />
            )}
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
  flex flex-col gap-48
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