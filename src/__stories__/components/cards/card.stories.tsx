import tw from 'twin.macro';

import { Card } from '~/components/cards';

import { CATEGORIES } from '~/types';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {},
};

export const _Card = () => (
  <Wrapper>
    <Card
      title="Diablo VII: Several Top Tier Soulbound Weapons & Armors"
      category={CATEGORIES.GAME}
      price={99999999999999}
      tokenValue={123456}
      verified
    />
    <Card
      title="Early-access to BAYC Otherside"
      category={CATEGORIES.GENERAL}
      price={123456}
      tokenValue={123456}
    />
    <Card
      title="Unstaking-in-progress 3,000 stETH -> ETH, 5 days left"
      category={CATEGORIES.SBT}
      price={0}
      tokenValue={123456}
      verified
    />
    <Card
      title="Vesting-in-process 50,000 UNI for 6 months"
      category={CATEGORIES.TOKEN}
      price={3849000}
      tokenValue={5000000}
    />
    <Card
      title="Whitelisted in BAYC Season 3 minting event"
      category={CATEGORIES.WHITELIST}
      price={0}
      tokenValue={0}
    />
    <Card
      title="Diablo VII: Several Top Tier Soulbound Weapons & Armors"
      category={CATEGORIES.GAME}
      price={999999}
      tokenValue={123456}
      verified
    />
  </Wrapper>
);

const Wrapper = tw.div`
  p-20 grid grid-cols-3 gap-x-24 gap-y-32 w-1440
`;
