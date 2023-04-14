import tw from 'twin.macro';

import IconArbitrum from '~/assets/icons/icon-arbitrum.png';
import IconDex from '~/assets/icons/icon-dex.png';
import IconEth from '~/assets/icons/icon-eth.png';
import IconNft from '~/assets/icons/icon-nft.png';
import IconZksync from '~/assets/icons/icon-zksync.png';
import { CardTxHistory } from '~/components/cards-tx-history';

export default {
  title: 'Components/CardTxHistory',
  component: CardTxHistory,
  argTypes: {},
};

export const _CardTxHistory = () => {
  return (
    <Wrapper>
      <CardTxHistory image={IconEth} title="May 17, 2018" description="First Tx on Ethereum" />
      <CardTxHistory image={IconArbitrum} title="Over 1k" description="No. of Tx on Abitrum" />
      <CardTxHistory image={IconZksync} title="Over 1k" description="No. of Tx on zkSync" />
      <CardTxHistory image={IconZksync} title="Over 100" description="Tx Vol. on zkSync" />
      <CardTxHistory image={IconNft} title="Over $1m" description="Tx Vol. on NFT Marketplace" />
      <CardTxHistory image={IconDex} title="Over $1m" description="Tx Vol. on DEX" />
      <CardTxHistory image={IconDex} title="Over $1k" description="Provided Liquidity on DEX" />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  grid grid-cols-3 gap-24 w-full
`;
