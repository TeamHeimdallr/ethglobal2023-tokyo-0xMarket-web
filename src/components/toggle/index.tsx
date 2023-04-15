import { HTMLAttributes } from 'react';
import tw from 'twin.macro';

interface Props extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
}

export const Toggle = ({ active, ...rest }: Props) => {
  return (
    <Wrapper {...rest}>
      {active ? (
        <ActiveWrapper>
          <ActiveIcon />
        </ActiveWrapper>
      ) : (
        <InactiveWrapper>
          <InactiveIcon />
        </InactiveWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-56 h-32 rounded-24 overflow-hidden clickable
`;
const InactiveWrapper = tw.div`
  w-full h-full bg-grayscale-6 relative
`;
const InactiveIcon = tw.div`
  absolute top-6 left-6 w-20 h-20 rounded-full bg-grayscale-2
`;
const ActiveWrapper = tw.div`
  w-full h-full bg-blue relative
`;
const ActiveIcon = tw.div`
  absolute top-2 right-2 w-28 h-28 rounded-full bg-white
`;
