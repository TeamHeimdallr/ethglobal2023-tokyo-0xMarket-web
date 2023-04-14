import {
  ChangeEvent,
  TextareaHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

interface Props extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'> {
  border?: boolean;
  onChange?: (value?: string) => void;
}
export const TextFieldMultiline = ({ border, onChange, ...rest }: Props) => {
  const valueRef = useRef<HTMLTextAreaElement>(null);
  const hiddenValueRef = useRef<HTMLTextAreaElement>(null);

  const [value, setValue] = useState('');
  const [focused, focus] = useState(false);

  const resize = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    if (!hiddenValueRef.current) return;
    hiddenValueRef.current.value = e.currentTarget.value;

    const hiddenScrollHeight = hiddenValueRef.current.scrollHeight;
    e.currentTarget.style.height = `${hiddenScrollHeight}px`;
  }, []);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const value = e.currentTarget.value;
      resize(e);
      setValue(value);
      onChange?.(value);
    },
    [onChange, resize]
  );

  useEffect(() => {
    const value = valueRef.current;
    const hiddenValue = hiddenValueRef.current;
    if (!value || !hiddenValue) return;

    const scrollHeight = hiddenValue.scrollHeight;
    if (scrollHeight > 0) value.style.height = `${scrollHeight}px`;
  }, []);

  return (
    <Wrapper border={border} focused={focused}>
      <TextAreaWrapper>
        <Input
          value={value}
          onChange={handleChange}
          rows={1}
          placeholder=""
          onFocus={() => focus(true)}
          onBlur={() => focus(false)}
          {...rest}
        />
        <HiddenInput ref={hiddenValueRef} rows={1} {...rest} />
      </TextAreaWrapper>
    </Wrapper>
  );
};

interface WrapperProps {
  border?: boolean;
  focused?: boolean;
}
const Wrapper = styled.div<WrapperProps>(({ border, focused }) => [
  tw`
    flex flex-col items-start bg-transparent rounded-8
  `,
  border
    ? tw`
      px-24 py-20 border-1 border-grayscale-6 border-solid
    `
    : ``,
  border && focused ? tw`border-transparent bg-grayscale-7` : ``,
]);

const TextAreaWrapper = tw.div`
  flex-1 relative justify-center items-center w-full text-center flex
`;

const Input = styled.textarea(() => [
  tw`
  font-sans font-sb-24 text-grayscale-1 bg-transparent placeholder:text-grayscale-4 focus:ring-0 z-1 w-full
    `,
  css`
    border: 0 none #fff;
    overflow: hidden;

    -webkit-appearance: none;
    -moz-apperarance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;

    padding: 0px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    -ms-box-shadow: none;
    -o-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/
  `,
]);

const HiddenInput = styled.textarea(() => [
  tw`
  font-sans font-sb-24 absolute h-auto z-0 w-full invisible
  `,
  css`
    border: 0 none #fff;
    overflow: hidden;
    padding: 0px;
    resize: none; /*remove the resize handle on the bottom right*/
  `,
]);
