import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { ButtonMediumDefault, ButtonMediumPrimary } from '~/components/buttons';
import { Logo } from '~/components/logo';

import { useListingDataState } from '~/states/listing-data';
import { useListingProgressState } from '~/states/listing-progress';

interface Props {
  // TODO return listed data
  handleListing?: () => Promise<void>;
}
export const GnbListing = ({ handleListing }: Props) => {
  const navigate = useNavigate();
  const { progress, setProgress, resetProgress } = useListingProgressState();
  const { data } = useListingDataState();

  const nextButtonText = useMemo(() => {
    if (progress === 0) return 'Continue';
    if (progress === 1) return 'List now';
    return 'Continue';
  }, [progress]);

  const nextButtonDisabled = useMemo(() => {
    if (progress === 0) return !data.address || !data.category;
    if (progress === 1) return true; // TODO;
  }, [data, progress]);

  const handleNextButtonClick = useCallback(async () => {
    if (progress === 0) setProgress(1);
    if (progress === 1) {
      await handleListing?.();
      navigate('/list/1'); // TODO: listed id
      resetProgress();
    }
  }, [handleListing, navigate, progress, resetProgress, setProgress]);

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo color="#fff" />
      </LogoWrapper>
      <ButtonWrapper>
        <ButtonMediumDefault text="Cancel" onClick={() => navigate('/')} />
        <ButtonMediumPrimary
          text={nextButtonText}
          disabled={nextButtonDisabled}
          onClick={handleNextButtonClick}
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
  flex-center
`;

const ButtonWrapper = tw.div`
  flex gap-8
  sm:hidden
  md:flex
`;
