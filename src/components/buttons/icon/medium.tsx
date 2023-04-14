import { ButtonHTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  selected?: boolean;
}

export const ButtonIconMedium = ({ icon, selected, ...rest }: Props) => {
  return (
    <Wrapper selected={selected} {...rest}>
      <IconWrapper>{icon}</IconWrapper>
    </Wrapper>
  );
};

interface WrapperProps {
  selected?: boolean;
}
const Wrapper = styled.button<WrapperProps>(({ selected }) => [
  tw`
    flex-center w-36 h-36 bg-transparent rounded-8 clickable
    enabled:hover:bg-grayscale-6
    disabled:non-clickable disabled:bg-transparent
  `,
  css`
    svg {
      width: 20px;
      height: 20px;
    }
    svg path {
      fill: #adb3be;
    }

    &:enabled:hover svg path {
      fill: #e5e7ec;
    }

    &:disabled svg path {
      fill: #333d4b;
    }
  `,
  selected
    ? css`
        &,
        &:hover {
          background: #333d4b;
          & svg path {
            fill: #ffc875 !important;
          }
        }
      `
    : ``,
]);

const IconWrapper = tw.div`
  w-20 h-20 
`;
