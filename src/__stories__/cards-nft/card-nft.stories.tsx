import tw from 'twin.macro';

import { CardNFT } from '~/components/cards-nft';

import { CURRENCY } from '~/types';

export default {
  title: 'Components/CardNFT',
  component: CardNFT,
  argTypes: {},
};

export const _CardNFT = () => {
  const firstNFT = {
    tokenId: 1456,
    tokenName: 'Bored Ape Yacht Club',
    image:
      'https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png',
    tokenPrice: {
      balance: 99.99,
      currency: CURRENCY.ETH,
    },
  };
  const secondNFT = {
    tokenId: 1457,
    tokenName: 'Bored Ape Yacht Club',
    image:
      'https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png',
    tokenPrice: {
      balance: 99.99,
      currency: CURRENCY.ETH,
    },
  };
  const thirdNFT = {
    tokenId: 1458,
    tokenName: 'Bored Ape Yacht Club',
    image:
      'https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png',
    tokenPrice: {
      balance: 99.99,
      currency: CURRENCY.ETH,
    },
  };
  const fourthNFT = {
    tokenId: 1459,
    tokenName: 'Bored Ape Yacht Club',
    image:
      'https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png',
    tokenPrice: {
      balance: 99.99,
      currency: CURRENCY.ETH,
    },
  };
  const firstSBT = {
    tokenId: 1456,
    tokenName: 'Bored Ape Yacht Club',
    image:
      'https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png',
    sbt: true,
  };
  const secondSBT = {
    tokenId: 1457,
    tokenName: 'Bored Ape Yacht Club',
    image:
      'https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png',
    sbt: true,
  };
  const thirdSBT = {
    tokenId: 1458,
    tokenName: 'Bored Ape Yacht Club',
    image:
      'https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png',
    sbt: true,
  };
  const fourthSBT = {
    tokenId: 1459,
    tokenName: 'Bored Ape Yacht Club',
    image:
      'https://static.cryptobriefing.com/wp-content/uploads/2022/01/31075231/bored-ape-record-nft-cover-1024x538.png',
    sbt: true,
  };

  return (
    <Wrapper>
      <CardContainer>
        <CardNFT {...firstSBT} />
        <CardNFT {...secondSBT} />
        <CardNFT {...thirdSBT} />
        <CardNFT {...fourthSBT} />
      </CardContainer>
      <Divider />
      <CardContainer>
        <CardNFT {...firstNFT} />
        <CardNFT {...secondNFT} />
        <CardNFT {...thirdNFT} />
        <CardNFT {...fourthNFT} />
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
