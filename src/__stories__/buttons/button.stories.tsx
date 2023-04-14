import tw from 'twin.macro';

import {
  ButtonIconLarge,
  ButtonIconMedium,
  ButtonIconSmall,
  ButtonLargeDefault,
  ButtonLargePrimary,
  ButtonMediumDefault,
  ButtonMediumPrimary,
} from '~/components/buttons';
import { IconFavorites, IconNoti } from '~/components/icons';

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
    <Wrapper>
      <ButtonIconLarge icon={<IconNoti />} />
      <ButtonIconLarge icon={<IconNoti />} selected />
      <ButtonIconLarge icon={<IconNoti />} disabled />
    </Wrapper>
    <Wrapper>
      <ButtonIconMedium icon={<IconFavorites />} />
      <ButtonIconMedium icon={<IconFavorites />} selected />
      <ButtonIconMedium icon={<IconFavorites />} disabled />
    </Wrapper>
    <Wrapper>
      <ButtonIconSmall icon={<IconFavorites />} />
      <ButtonIconSmall icon={<IconFavorites />} selected />
      <ButtonIconSmall icon={<IconFavorites />} disabled />
    </Wrapper>
  </OuterWrapper>
);

const OuterWrapper = tw.div`
  p-20 flex flex-col gap-20 items-start
`;
const Wrapper = tw.div`
  flex flex gap-10 items-start
`;
