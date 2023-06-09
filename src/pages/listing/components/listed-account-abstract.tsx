import { useMemo } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ethers } from 'ethers';
import tw from 'twin.macro';
import { useBalance } from 'wagmi';

import { useAccountLockupTokensQuery, useAccountTokensQuery } from '~/api/account-portfolios';

import { Category } from '~/components/category';
import { Checkbox } from '~/components/checkbox';
import { IconLocked } from '~/components/icons';

import { parseNumberCommaSeperator } from '~/utils/number';
import { parseLidoStakingAsset } from '~/utils/token';
import { useListingDataState } from '~/states/listing-data';

import { CATEGORIES } from '~/types';

import { price } from '~/__mocks__/data/token-price';
import { CategoriesMap, DEFAULT_CHAIN_ID } from '~/constants';

export const ListedAccountAbstract = () => {
  const { data, setData } = useListingDataState();
  const { address, category } = data;

  const { data: ethBalance } = useBalance({
    chainId: DEFAULT_CHAIN_ID,
    address: address as `0x{string}`,
    enabled: !!address && ethers.utils.isAddress(address),
  });
  const { data: tokenData } = useAccountTokensQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });

  const { data: lockupTokens } = useAccountLockupTokensQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: false,
  });

  const tokens = tokenData?.data?.data?.erc20?.data;
  // const nfts = tokenData?.data.data.erc721.data;

  const lido = tokens?.find(t => t?.token?.symbol === 'stETH');
  const stakingAssets = useMemo(() => (lido ? [parseLidoStakingAsset(lido)] : []), [lido]);

  const categoryData = CategoriesMap[category ?? CATEGORIES.GENERAL];

  const ethTokenValue = ethBalance
    ? Number(price.find(p => p.symbol === ethBalance?.symbol)?.lastPriceUSD || 0) || 0
    : 0;
  const ethTotalValue = Number(ethBalance?.formatted ?? 0) * ethTokenValue;

  const totalValue = useMemo(() => {
    const tokensValue =
      tokens?.reduce((res, d) => {
        const tokenPrice =
          Number(price.find(p => p.symbol === d.token.symbol)?.lastPriceUSD || 0) || 0;

        return (res += tokenPrice);
      }, 0) ?? 0;
    const nftValue = 0;
    const lockTokenValue = lockupTokens?.data?.reduce((res, d) => (res += d.tokenValue), 0) ?? 0;
    const stakingAssetValue = stakingAssets?.reduce((res, d) => (res += d.tokenValue), 0) ?? 0;

    return ethTotalValue + tokensValue + nftValue + lockTokenValue + stakingAssetValue;
  }, [ethTotalValue, lockupTokens?.data, stakingAssets, tokens]);

  return (
    <Wrapper>
      <LeftWrapper>
        <Image src={categoryData.image} />
        <AddressContentWrapper>
          <AddressWrapper>
            <Category category={category} />
            {data.hidden ? (
              <HiddenAddress>
                <IconLocked width={20} height={20} color="#6D7684" />
                Your address is hidden
              </HiddenAddress>
            ) : (
              <>{address}</>
            )}
          </AddressWrapper>
          <HideAddressWrapper onClick={() => setData({ hidden: !data.hidden })}>
            <Checkbox selected={data.hidden} />
            Hide address
          </HideAddressWrapper>
        </AddressContentWrapper>
      </LeftWrapper>
      <RightWrapper>
        <TokenValueLabel>Token value</TokenValueLabel>
        <TokenValue>
          {parseNumberCommaSeperator({ number: totalValue, decimalPoint: 0, prefix: '$' })}
        </TokenValue>
      </RightWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex items-start gap-16 justify-between
`;

const LeftWrapper = tw.div`
  flex gap-20
`;
const RightWrapper = tw.div`
  flex flex-col flex-shrink-0 items-end py-5 w-279
`;

interface ImageProps {
  src?: string;
}
const Image = styled.div<ImageProps>(({ src }) => [
  tw`
    flex-center rounded-full bg-grayscale-5 bg-center bg-cover bg-no-repeat w-64 h-64 flex-shrink-0
  `,
  src &&
    css`
      background-color: #fff;
      background-image: url(${src});
    `,
]);

const AddressContentWrapper = tw.div`
  flex flex-col gap-12 items-start
`;

const AddressWrapper = tw.div`
  flex flex-col gap-8 font-r-16 text-grayscale-2 items-start
`;

const HiddenAddress = tw.div`
  flex gap-6 font-sb-16 text-grayscale-2 items-center
`;

const HideAddressWrapper = tw.div`
  flex items-center gap-10 font-r-14 text-grayscale-2 clickable select-none
`;

const TokenValueLabel = tw.div`
  font-r-14 text-grayscale-3
`;

const TokenValue = tw.div`
  font-sb-20 text-white
`;
