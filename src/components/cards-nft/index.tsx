import { HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import tw from 'twin.macro';

import { NFT, Token } from '~/types';

interface Props extends HTMLAttributes<HTMLDivElement> {
  image: string;
  nft: NFT;
  sbt?: boolean;
  nftValue?: Token;
}

export const CardNFT = ({ image, nft, nftValue, sbt = false, ...rest }: Props) => {
  return (
    <Wrapper {...rest}>
      <Image src={image} />
      <TokenContent>
        <TokenName>{nft.name}</TokenName>
        <TokenId>#{nft.id}</TokenId>
        {!sbt && nftValue && (
          <TokenPriceContent>{`${nftValue.value} ${nftValue.name}`}</TokenPriceContent>
        )}
      </TokenContent>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col gap-12
`;
interface ImageProps {
  src?: string;
}
const Image = styled.div<ImageProps>(({ src }) => [
  tw`
    flex-center bg-grayscale-5 bg-center bg-cover bg-no-repeat w-158 h-158 flex-shrink-0 rounded-8 border-0 ring-0
  `,
  src &&
    css`
      background-image: url(${src});
    `,
]);
const TokenContent = tw.div`
  flex flex-col gap-4
`;
const TokenName = tw.span`
  font-r-12 text-white
`;
const TokenId = tw.span`
  font-sb-16 text-white
`;
const TokenPriceContent = tw.span`
  text-grayscale-3 font-r-12
`;
