import tw from 'twin.macro';

import IconEth from '~/assets/icons/icon-eth.png';
import IconMatic from '~/assets/icons/icon-matic.png';
import { CardToken } from '~/components/cards-token';

export default {
  title: 'Components/CardToken',
  component: CardToken,
  argTypes: {},
};

export const _CardToken = () => {
  return (
    <Wrapper>
      <CardToken image={IconEth} tokenAmount={0.00006} tokenName="ETH" tokenValue={1864.93} />
      <CardToken image={IconMatic} tokenAmount={99.99} tokenName="MATIC" tokenValue={1864.93} />
      <CardToken image={IconEth} tokenAmount={0.00006} tokenName="ETH" tokenValue={1864.93} />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex gap-24 w-full
`;
