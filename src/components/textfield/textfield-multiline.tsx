import { ReactNode, TextareaHTMLAttributes } from 'react';
import tw from 'twin.macro';

interface Props extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  prefixIcon?: ReactNode;
  onChange?: (value?: string) => void;
}
export const TextFieldMultiline = ({ prefixIcon }: Props) => {
  return <></>;
};

const Wrapper = tw.div``;
