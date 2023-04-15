import tw from 'twin.macro';

import {
  useAccountInGameInfosQuery,
  useAccountLockupTokensQuery,
  useAccountNftsQuery,
  useAccountSbtsQuery,
  useAccountStakingAssetsQuery,
  useAccountTokensQuery,
  useAccountTxHistoriesQuery,
} from '~/api/account-portfolios';

import { Footer } from '~/components/footer';
import { GnbListing } from '~/components/gnb';
import {
  PortfolioInGameInfos,
  PortfolioLockupTokens,
  PortfolioNfts,
  PortfolioSbts,
  PortfolioStakingAssets,
  PortfolioTokens,
  PortfolioTxHistories,
} from '~/components/portfolios';

import { useListingDataState } from '~/states/listing-data';

import { BackButton } from '../components/back-button';
import { ListingInputs } from '../components/lising-inputs';
import { ListedAccountAbstract } from '../components/listed-account-abstract';
import { ListingVerify } from '../components/listing-verify';

export const ListingStep2 = () => {
  const { data } = useListingDataState();
  const { address } = data;

  const { data: inGameInfo } = useAccountInGameInfosQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  const { data: tokens } = useAccountTokensQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  const { data: nfts } = useAccountNftsQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  const { data: sbts } = useAccountSbtsQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  const { data: lockupTokens } = useAccountLockupTokensQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  const { data: stakingAssets } = useAccountStakingAssetsQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  const { data: txHistories } = useAccountTxHistoriesQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });

  return (
    <Wrapper>
      <GnbListing />
      <ContentWrapper>
        <InputWrapper>
          <BackButton />
          <ListedAccountAbstract />
          <Divider />
          <ListingInputs />
          <ListingVerify />
        </InputWrapper>
        <PortfolioWrapper>
          <PortfolioInnerWrapper>
            <PortfolioTitle>Portfolio</PortfolioTitle>
            <PortfolioInGameInfos data={inGameInfo?.data} />
            <Divider />
            <PortfolioTokens data={tokens?.data} />
            <Divider />
            <PortfolioSbts data={sbts?.data} />
            <Divider />
            <PortfolioNfts data={nfts?.data} />
            <Divider />
            <PortfolioLockupTokens data={lockupTokens?.data} />
            <Divider />
            <PortfolioStakingAssets data={stakingAssets?.data} />
            <Divider />
            <PortfolioTxHistories data={txHistories?.data} />
          </PortfolioInnerWrapper>
        </PortfolioWrapper>
      </ContentWrapper>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = tw.div`
  w-full h-full flex flex-col items-center
  min-w-1440 min-h-960
`;

const ContentWrapper = tw.div`
  w-full pt-120 pb-120 flex flex-col flex-1 flex-shrink-0 items-center gap-80
`;

const InputWrapper = tw.div`
  w-886 flex flex-col flex-1 flex-shrink-0 gap-48
`;

const Divider = tw.div`
  w-full h-1 bg-grayscale-5
`;

const PortfolioWrapper = tw.div`
  w-full flex justify-center py-60 bg-grayscale-7
`;

const PortfolioInnerWrapper = tw.div`
  w-886 flex flex-col gap-48
`;

const PortfolioTitle = tw.div`
  py-10 font-sb-24 text-white
`;
