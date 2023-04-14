import tw from 'twin.macro';

import * as IconSvg from '~/components/icons';

export default {
  title: 'Components/Icons',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const _Icons = (args: any) => {
  return (
    <Wrapper>
      <InnerWrapper>
        <IconSvg.IconAlert {...args} />
        <IconSvg.IconBack {...args} />
        <IconSvg.IconCalendar {...args} />
        <IconSvg.IconCancel {...args} />
        <IconSvg.IconCheck {...args} />
        <IconSvg.IconComment {...args} />
        <IconSvg.IconCopy {...args} />
        <IconSvg.IconDashboard {...args} />
        <IconSvg.IconDiscord {...args} />
        <IconSvg.IconDollarWithCircle {...args} />
        <IconSvg.IconDollars {...args} />
        <IconSvg.IconDown {...args} />
        <IconSvg.IconDownFill {...args} />
        <IconSvg.IconDownFillGradient {...args} />
        <IconSvg.IconDownload {...args} />
        <IconSvg.IconFavorites {...args} />
        <IconSvg.IconFilter {...args} />
        <IconSvg.IconHeart {...args} />
        <IconSvg.IconLocked {...args} />
        <IconSvg.IconLogout {...args} />
        <IconSvg.IconMail {...args} />
        <IconSvg.IconMenu {...args} />
        <IconSvg.IconMinus {...args} />
        <IconSvg.IconMore {...args} />
        <IconSvg.IconNew {...args} />
        <IconSvg.IconNext {...args} />
        <IconSvg.IconNoti {...args} />
        <IconSvg.IconPaper {...args} />
        <IconSvg.IconPlus {...args} />
        <IconSvg.IconProfileFill {...args} />
        <IconSvg.IconProfileOn {...args} />
        <IconSvg.IconProfileStroke {...args} />
        <IconSvg.IconRefresh {...args} />
        <IconSvg.IconSearch {...args} />
        <IconSvg.IconShare {...args} />
        <IconSvg.IconTelegram {...args} />
        <IconSvg.IconTime {...args} />
        <IconSvg.IconTwitter {...args} />
        <IconSvg.IconUnlocked {...args} />
        <IconSvg.IconUp {...args} />
        <IconSvg.IconUpFill {...args} />
        <IconSvg.IconWallet {...args} />
      </InnerWrapper>
    </Wrapper>
  );
};

_Icons.argTypes = {
  color: { control: { type: 'array' } },
};
_Icons.args = {
  color: '#191F28',
};

const Wrapper = tw.div`
  p-20 flex flex-col gap-30 bg-white
`;
const InnerWrapper = tw.div`
  grid grid-cols-6 gap-16
`;
