import { ButtonHTMLAttributes, ReactNode } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  selected?: boolean;
}

export const ButtonIconLarge = ({ icon, selected, ...rest }: Props) => {
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
    flex-center w-40 h-40 bg-transparent rounded-8 clickable
    enabled:hover:bg-grayscale-6
    disabled:non-clickable disabled:bg-transparent
  `,
  css`
    svg {
      width: 24px;
      height: 24px;
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
  w-24 h-24
`;
