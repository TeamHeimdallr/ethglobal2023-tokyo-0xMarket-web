import tw from 'twin.macro';

import {
  ButtonLargeDefault,
  ButtonLargePrimary,
  ButtonMediumDefault,
  ButtonMediumPrimary,
} from '~/components/buttons';

export default {
  title: 'Components/Button',
  argTypes: {},
};

export const _Button = () => (
  <OuterWrapper>
    <Wrapper>
      <ButtonLargePrimary text="Text Here" />
      <ButtonLargePrimary text="Text Here" loading />
      <ButtonLargePrimary text="Text Here" disabled />
    </Wrapper>
    <Wrapper>
      <ButtonLargeDefault text="Text Here" />
      <ButtonLargeDefault text="Text Here" loading />
      <ButtonLargeDefault text="Text Here" disabled />
    </Wrapper>
    <Wrapper>
      <ButtonMediumPrimary text="Text Here" />
      <ButtonMediumPrimary text="Text Here" loading />
      <ButtonMediumPrimary text="Text Here" disabled />
    </Wrapper>
    <Wrapper>
      <ButtonMediumDefault text="Text Here" />
      <ButtonMediumDefault text="Text Here" loading />
      <ButtonMediumDefault text="Text Here" disabled />
    </Wrapper>
  </OuterWrapper>
);

const OuterWrapper = tw.div`
  p-20 flex flex-col gap-20 items-start
`;
const Wrapper = tw.div`
  flex flex gap-10 items-start
`;
