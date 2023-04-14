import { InputHTMLAttributes, ReactNode } from 'react';
import tw from 'twin.macro';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  prefixIcon?: ReactNode;
  onChange?: (value?: string) => void;
}
export const TextFieldNumber = ({ prefixIcon }: Props) => {
  return <></>;
};

const Wrapper = tw.div``;
