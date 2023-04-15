import tw from 'twin.macro';

import { CardNFT } from '~/components/cards-nft';

import { CURRENCY } from '~/types';

export default {
  title: 'Components/CardNFT',
  component: CardNFT,
  argTypes: {},
};

export const _CardNFT = () => {
  return (
    <Wrapper>
      <CardContainer>
        <CardNFT
          image="https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png"
          nft={{ name: 'Bored Ape Yacht Club', id: '1456' }}
          nftValue={{ name: CURRENCY.ETH, value: '230.99' }}
        />
        <CardNFT
          image="https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png"
          nft={{ name: 'Bored Ape Yacht Club', id: '1456' }}
          nftValue={{ name: CURRENCY.ETH, value: '230.99' }}
        />
        <CardNFT
          image="https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png"
          nft={{ name: 'Bored Ape Yacht Club', id: '1456' }}
          nftValue={{ name: CURRENCY.ETH, value: '230.99' }}
        />
        <CardNFT
          image="https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png"
          nft={{ name: 'Bored Ape Yacht Club', id: '1456' }}
          nftValue={{ name: CURRENCY.ETH, value: '230.99' }}
        />
      </CardContainer>
      <Divider />
      <CardContainer>
        <CardNFT
          image="https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png"
          nft={{ name: 'Bored Ape Yacht Club', id: '1456' }}
          sbt
        />
        <CardNFT
          image="https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png"
          nft={{ name: 'Bored Ape Yacht Club', id: '1456' }}
          sbt
        />
        <CardNFT
          image="https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png"
          nft={{ name: 'Bored Ape Yacht Club', id: '1456' }}
          sbt
        />
        <CardNFT
          image="https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png"
          nft={{ name: 'Bored Ape Yacht Club', id: '1456' }}
          sbt
        />
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-12
`;
const CardContainer = tw.div`
  flex gap-24
`;
const Divider = tw.div`
  h-1 bg-grayscale-3
`;
