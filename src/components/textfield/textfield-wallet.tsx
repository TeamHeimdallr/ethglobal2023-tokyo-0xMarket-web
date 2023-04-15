import { ChangeEvent, InputHTMLAttributes, useCallback, useRef, useState } from 'react';
import tw from 'twin.macro';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  onChange?: (value?: string) => void;
}
export const TextFieldWallet = ({ onChange, ...rest }: Props) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLInputElement>(null);
  const hiddenValueRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState('');

  const resize = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!hiddenValueRef.current || !wrapperRef.current) return;
    hiddenValueRef.current.value = e.currentTarget.value;

    const hiddenScrollWidth = hiddenValueRef.current.scrollWidth;
    e.currentTarget.style.width = `${hiddenScrollWidth}px`;
    wrapperRef.current.style.width = `${hiddenScrollWidth + 80}px`;
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.currentTarget.value;
      resize(e);
      setValue(value);
      onChange?.(value);
    },
    [onChange, resize]
  );

  return (
    <Wrapper ref={wrapperRef}>
      <Input ref={valueRef} value={value} onChange={handleChange} {...rest} />
      <HiddenInput ref={hiddenValueRef} value={value} onChange={handleChange} {...rest} />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  px-40 py-16 bg-grayscale-6 rounded-40 w-358 max-w-780
`;

const Input = tw.input`
  font-r-18 text-white bg-transparent w-278 max-w-700 text-center
  placeholder:text-grayscale-3
`;

const HiddenInput = tw.input`
  invisible absolute z-0 bg-transparent font-r-18 w-278 max-w-700 text-center
`;
