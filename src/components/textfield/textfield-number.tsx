import { InputHTMLAttributes } from 'react';
import { NumberFormatValues, NumericFormat } from 'react-number-format';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { useListingDataState } from '~/states/listing-data';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'defaultValue'> {
  suffix?: string;
  defaultValue?: number;
  onChange?: (value: NumberFormatValues) => void;
}
export const TextFieldNumber = ({ suffix, defaultValue, placeholder, onChange }: Props) => {
  const { data } = useListingDataState();

  return (
    <Wrapper>
      <NumericFormat
        defaultValue={defaultValue}
        placeholder={placeholder}
        onValueChange={values => {
          onChange?.(values);
        }}
        maxLength={13}
        allowLeadingZeros
        thousandSeparator=","
      />
      {suffix && data.price && <Suffix>{suffix}</Suffix>}
    </Wrapper>
  );
};

const Wrapper = styled.div(() => [
  tw`
   flex gap-8 
  `,
  css`
    width: fit-content;

    & > input {
      background: transparent !important;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;

      display: flex;
      align-items: center;

      width: 172px;

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

const Suffix = tw.div`
  font-sb-24 text-grayscale-5
`;
