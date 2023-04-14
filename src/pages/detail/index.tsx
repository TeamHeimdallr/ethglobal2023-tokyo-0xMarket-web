import { useParams } from 'react-router-dom';
import tw from 'twin.macro';

import {
  useAccountInGameInfosQuery,
  useAccountLockupTokensQuery,
  useAccountStakingAssetsQuery,
  useAccountTokensQuery,
  useAccountTxHistoriesQuery,
} from '~/api/account-portfolios';

import { Footer } from '~/components/footer';
import { GnbMain } from '~/components/gnb';
import {
  PortfolioInGameInfos,
  PortfolioLockupTokens,
  PortfolioNfts,
  PortfolioSbts,
  PortfolioStakingAssets,
  PortfolioTokens,
  PortfolioTxHistories,
} from '~/components/portfolios';

import { AccountInfo } from './components/account-info';
const DetailPage = () => {
  const params = useParams();
  const { id } = params;

  const { data: inGameInfo } = useAccountInGameInfosQuery(id ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!id,
  });
  const { data: tokenData } = useAccountTokensQuery(id ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!id,
  });

  const { data: lockupTokens } = useAccountLockupTokensQuery(id ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!id,
  });
  const { data: stakingAssets } = useAccountStakingAssetsQuery(id ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!id,
  });
  const { data: txHistories } = useAccountTxHistoriesQuery(id ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!id,
  });

  const tokens = tokenData?.data.data.erc20.data;
  const nfts = tokenData?.data.data.erc721.data;
  const sbts = tokenData?.data.data.poap.data;

  return (
    <Wrapper>
      <GnbMain />
      <ContentWrapper>
        <DetailWrapper>
          <AccountInfo />
        </DetailWrapper>
        <PortfolioWrapper>
          <PortfolioInnerWrapper>
            <PortfolioTitle>Portfolio</PortfolioTitle>
            <PortfolioInGameInfos data={inGameInfo?.data} />
            <Divider />
            <PortfolioTokens data={tokens} />
            <Divider />
            <PortfolioSbts data={sbts} />
            <Divider />
            <PortfolioNfts data={nfts} />
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

const DetailWrapper = tw.div`
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

export default DetailPage;
