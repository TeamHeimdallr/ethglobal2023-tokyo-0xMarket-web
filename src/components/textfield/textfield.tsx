import { InputHTMLAttributes, ReactNode, useCallback, useState } from 'react';
import tw from 'twin.macro';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  prefixIcon?: ReactNode;

  onChange?: (value?: string) => void;
}
export const TextField = ({ prefixIcon, onChange, ...rest }: Props) => {
  const [value, setValue] = useState('');
  const handleChange = useCallback(
    (value: string) => {
      setValue(value);
      onChange?.(value);
    },
    [onChange]
  );

  return (
    <Wrapper>
      {prefixIcon && <IconWrapper>{prefixIcon}</IconWrapper>}
      <Input value={value} onChange={e => handleChange(e.target.value)} {...rest} />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex w-full px-24 gap-8 font-r-16
`;

const Input = tw.input`
  text-grayscale-2 bg-transparent w-full
  placeholder:text-grayscale-4
`;

const IconWrapper = tw.div`
  flex-center flex-shrink-0
`;
