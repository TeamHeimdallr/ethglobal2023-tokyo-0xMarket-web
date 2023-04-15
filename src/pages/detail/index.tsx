import { useParams } from 'react-router-dom';
import { ethers } from 'ethers';
import tw from 'twin.macro';
import { useReadLocalStorage } from 'usehooks-ts';
import { useBalance } from 'wagmi';

import {
  useAccountInGameInfosQuery,
  useAccountLockupTokensQuery,
  useAccountTokensQuery,
  useAllTxQuery,
  useFirstTxQuery,
  useNftTxQuery,
  useTokenTxQuery,
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

import { parseLidoStakingAsset } from '~/utils/token';
import { parseTxHistory } from '~/utils/transactions';

import { Account, AccountEthBalance } from '~/types';

import { DEFAULT_CHAIN_ID, LISTED_LOCAL_KEY } from '~/constants';

import { AccountInfo } from './components/account-info';
import { UmaVerified } from './components/uma-verified';

const DetailPage = () => {
  const params = useParams();
  const { address: addressParams } = params;

  const address = addressParams ?? '';
  const enabled = !!address && ethers.utils.isAddress(address);
  const listedAccount = useReadLocalStorage<Account[]>(LISTED_LOCAL_KEY);
  const account = (listedAccount?.find(account => account.id === address) as Account) || undefined;

  const { data: ethBalance } = useBalance({
    chainId: DEFAULT_CHAIN_ID,
    address: account?.address as `0x{string}`,
    enabled: !!account?.address && ethers.utils.isAddress(account?.address),
  });

  const { data: tokenData } = useAccountTokensQuery(address, {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled,
  });

  const { data: lockupTokens } = useAccountLockupTokensQuery(address, {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled,
  });

  const { data: firstTxData } = useFirstTxQuery(address, {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled,
  });
  const { data: allTxData } = useAllTxQuery(address, {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled,
  });
  const { data: tokenTxData } = useTokenTxQuery(address, {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled,
  });
  const { data: nftTxData } = useNftTxQuery(address, {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled,
  });
  const { data: inGameInfo } = useAccountInGameInfosQuery(address, {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled,
  });

  const tokens = tokenData?.data?.data?.erc20?.data;
  const nfts = tokenData?.data?.data?.erc721?.data;
  const sbts = tokenData?.data?.data?.poap?.data;

  const firstTx = firstTxData?.result?.[0];
  const allTx = allTxData?.result;
  const tokenTx = tokenTxData?.result;
  const nftTx = nftTxData?.result;

  const lido = tokens?.find(t => t.token.symbol === 'stETH');
  const stakingAssets = lido ? [parseLidoStakingAsset(lido)] : [];
  const histories = parseTxHistory({ firstTx, allTx, tokenTx, nftTx });

  const verified = account?.verified;

  return (
    <Wrapper>
      <GnbMain />
      <ContentWrapper>
        <DetailWrapper>
          <AccountInfo />
        </DetailWrapper>
        {verified && verified.length > 0 && (
          <UmaWrapper>
            <UmaVerified verified={verified} />
          </UmaWrapper>
        )}
        <PortfolioWrapper>
          <PortfolioInnerWrapper>
            <PortfolioTitle>Portfolio</PortfolioTitle>
            <PortfolioTokens ethData={ethBalance as AccountEthBalance | undefined} data={tokens} />
            <Divider />
            <PortfolioSbts data={sbts} />
            <Divider />
            <PortfolioNfts data={nfts} />
            <Divider />
            <PortfolioLockupTokens data={lockupTokens?.data} />
            <Divider />
            <PortfolioStakingAssets data={stakingAssets} />
            <Divider />
            <PortfolioTxHistories data={histories} />
            <Divider />
            <PortfolioInGameInfos data={inGameInfo?.data} />
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

const UmaWrapper = tw.div`
  w-886 flex-shrink-0
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
