import { InputHTMLAttributes, ReactNode } from 'react';
import { NumberFormatValues, NumericFormat } from 'react-number-format';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'defaultValue'> {
  prefixIcon?: ReactNode;
  defaultValue?: number;
  onChange?: (value: NumberFormatValues) => void;
}
export const TextFieldNumber = ({ prefixIcon, defaultValue, placeholder, onChange }: Props) => {
  return (
    <Wrapper>
      {prefixIcon && <IconWrapper>{prefixIcon}</IconWrapper>}
      <NumericFormat
        defaultValue={defaultValue}
        placeholder={placeholder}
        onValueChange={values => {
          onChange?.(values);
        }}
        maxLength={18}
        allowLeadingZeros
        thousandSeparator=","
      />
    </Wrapper>
  );
};

const Wrapper = styled.div(() => [
  tw`
   flex w-full gap-8
  `,
  css`
    & > input {
      background: transparent !important;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;

      display: flex;
      align-items: center;

      width: 100%;

      color: #fff;
      font-weight: 600;
      font-size: 24px;
      line-height: 32px;

      padding: 0;

      &:placeholder {
        color: #6d7684;
      }

      &:focus {
        background: transparent !important;
        border: none !important;
        outline: none !important;
        box-shadow: none !important;
      }
    }
  `,
]);
const IconWrapper = tw.div`
  flex-center flex-shrink-0
`;
