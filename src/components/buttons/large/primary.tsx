import { ButtonHTMLAttributes, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import lottie from 'lottie-web';
import tw from 'twin.macro';

import loadingLottie from '~/assets/lottie/loading.json';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading?: boolean;
}
export const ButtonLargePrimary = ({ text, loading, ...rest }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    lottie.loadAnimation({
      container: ref.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loadingLottie,
    });

    return () => {
      lottie.destroy();
    };
  }, [loading]);

  return (
    <Wrapper isLoading={loading} {...rest}>
      <TextWrapper isLoading={loading}>{text}</TextWrapper>
      {loading && <LottieWrapper ref={ref} />}
    </Wrapper>
  );
};

interface LoadingProps {
  isLoading?: boolean;
}
const Wrapper = styled.button<LoadingProps>(({ isLoading }) => [
  isLoading
    ? tw`
      flex-center px-24 py-12 bg-blue rounded-8 font-sb-16 text-white relative non-clickable
    `
    : tw`
      flex-center px-24 py-12 bg-blue rounded-8 font-sb-16 text-white relative
      enabled:hover:bg-white enabled:hover:shadow-button-hover enabled:hover:text-blue
      disabled:non-clickable disabled:bg-black disabled:text-grayscale-4 disabled:shadow-none
    `,
]);

const TextWrapper = styled.span<LoadingProps>(({ isLoading }) => [
  isLoading ? tw`opacity-0` : `opacity-100`,
]);

const LottieWrapper = tw.div`
  w-12 h-12 absolute absolute-center
`;
