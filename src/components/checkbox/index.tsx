import { HTMLAttributes } from 'react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { IconCheck } from '../icons';

interface Props extends HTMLAttributes<HTMLDivElement> {
  selected?: boolean;
  error?: boolean;
}
export const Checkbox = ({ selected, error, ...rest }: Props) => {
  return (
    <Wrapper selected={selected} error={error} {...rest}>
      {selected && <IconCheck width={16} height={16} color="#fff" />}
    </Wrapper>
  );
};

interface WrapperProps {
  selected?: boolean;
  error?: boolean;
}
const Wrapper = styled.div<WrapperProps>(({ selected, error }) => [
  // normal
  !(selected || error)
    ? tw`
      flex-center w-20 h-20 rounded-4 clickable bg-grayscale-6 hover:bg-grayscale-5
    `
    : ``,

  // selected
  selected
    ? tw`
      flex-center w-20 h-20 rounded-4 clickable bg-blue hover:bg-light-blue
    `
    : ``,

  // error
  error
    ? tw`
      flex-center w-20 h-20 rounded-4 clickable bg-grayscale-6 hover:bg-grayscale-5
      border-1 border-solid border-red
    `
    : ``,
]);
