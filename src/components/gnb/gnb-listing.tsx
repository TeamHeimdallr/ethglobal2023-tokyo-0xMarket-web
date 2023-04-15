import { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ethers } from 'ethers';
import tw from 'twin.macro';

import { useContractOwnerQuery } from '~/api/contract/change-owner';

import { ButtonMediumDefault, ButtonMediumPrimary } from '~/components/buttons';
import { Logo } from '~/components/logo';

import { useListingDataState } from '~/states/listing-data';
import { useListingProgressState } from '~/states/listing-progress';

import { Account } from '~/types';

interface Props {
  handleListing?: (data: Partial<Account>) => Promise<void>;
  handleDepositing?: () => Promise<void>;
  isLoading?: boolean;
  isDepositSuccess?: boolean;
  isListSuccess?: boolean;
}

export const GnbListing = ({
  handleListing,
  handleDepositing,
  isLoading,
  isDepositSuccess,
  isListSuccess,
}: Props) => {
  const navigate = useNavigate();
  const { progress, setProgress, resetProgress } = useListingProgressState();
  const { data } = useListingDataState();

  const { refetch } = useContractOwnerQuery({
    address: (data?.address as `0x${string}`) ?? '',
  });

  const nextButtonText = useMemo(() => {
    if (progress === 0) return 'Continue';
    if (progress === 1) return 'Deposit';
    if (progress === 2) return 'List now';
    return 'Continue';
  }, [progress]);

  const nextButtonDisabled = useMemo(() => {
    if (progress === 0) return !data.address || !data.category;
    if (progress === 1 || progress === 2)
      return (
        !data.address ||
        !data.category ||
        !data.receivingAddress ||
        !data.title ||
        !data.description ||
        !data.price
      );
  }, [data, progress]);

  const handleNextButtonClick = useCallback(async () => {
    if (progress === 0) setProgress(1);
    if (progress === 1) await handleDepositing?.();
    if (progress === 2) await handleListing?.(data);
  }, [progress, setProgress, handleListing, data, handleDepositing]);

  useEffect(() => {
    if (isListSuccess) {
      navigate(`/${data.id}`);
      resetProgress();
    }
  }, [data.id, isListSuccess, navigate, resetProgress]);

  useEffect(() => {
    if (isDepositSuccess) {
      setProgress(2);
    }
  }, [isDepositSuccess, setProgress]);

  useEffect(() => {
    if (!!data.address && ethers.utils.isAddress(data.address)) refetch();
  }, [data.address, refetch]);

  return (
    <Wrapper>
      <LogoWrapper onClick={() => navigate('/')}>
        <Logo color="#fff" />
      </LogoWrapper>
      <ButtonWrapper>
        <ButtonMediumDefault text="Cancel" onClick={() => navigate('/')} />
        <ButtonMediumPrimary
          text={nextButtonText}
          disabled={nextButtonDisabled}
          onClick={handleNextButtonClick}
          loading={isLoading}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div(() => [
  tw`
    fixed left-0 top-0 w-full h-80 flex items-center justify-between px-24 py-20 z-1000
    flex-shrink-0
  `,
  css`
    background: rgba(25, 31, 40, 0.01);
    backdrop-filter: blur(4px);
  `,
]);

const LogoWrapper = tw.div`
  flex-center clickable
`;

const ButtonWrapper = tw.div`
  flex gap-8
  sm:hidden
  md:flex
`;
