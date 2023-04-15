import { useCallback } from 'react';
import tw from 'twin.macro';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';

import {
  useAccountInGameInfosQuery,
  useAccountLockupTokensQuery,
  useAccountTokensQuery,
  useAllTxQuery,
  useFirstTxQuery,
  useNftTxQuery,
  useTokenTxQuery,
} from '~/api/account-portfolios';
import { useContractDeposit } from '~/api/contract/change-owner';
import { useContractList } from '~/api/contract/list';

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

import { parseLidoStakingAsset } from '~/utils/token';
import { parseTxHistory } from '~/utils/transactions';
import { useListingDataState } from '~/states/listing-data';

import { Account, CATEGORIES } from '~/types';

import { LISTED_LOCAL_KEY } from '~/constants';

import { BackButton } from '../components/back-button';
import { ListingInputs } from '../components/lising-inputs';
import { ListedAccountAbstract } from '../components/listed-account-abstract';
import { ListingUma } from '../components/listing-uma';

export const ListingStep2 = () => {
  const { data } = useListingDataState();
  const { address } = data;
  const currentListedAccount = useReadLocalStorage<Account[]>(LISTED_LOCAL_KEY);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, saveStorage] = useLocalStorage<Account[]>(LISTED_LOCAL_KEY, currentListedAccount || []);

  const { data: inGameInfo } = useAccountInGameInfosQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  const { data: tokenData } = useAccountTokensQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });

  const { data: lockupTokens } = useAccountLockupTokensQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });

  const { data: firstTxData } = useFirstTxQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  const { data: allTxData } = useAllTxQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  const { data: tokenTxData } = useTokenTxQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });
  const { data: nftTxData } = useNftTxQuery(address ?? '', {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!address,
  });

  const tokens = tokenData?.data.data.erc20.data;
  const nfts = tokenData?.data.data.erc721.data;
  const sbts = tokenData?.data.data.poap.data;

  const firstTx = firstTxData?.data.result?.[0];
  const allTx = allTxData?.data.result;
  const tokenTx = tokenTxData?.data.result;
  const nftTx = nftTxData?.data.result;

  const lido = tokens?.find(t => t.token.symbol === 'stETH');
  const stakingAssets = lido ? [parseLidoStakingAsset(lido)] : [];
  const histories = parseTxHistory({ firstTx, allTx, tokenTx, nftTx });

  const {
    writeAsync: listAsync,
    isLoading: isListLoading,
    isSuccess: isListSuccess,
  } = useContractList({
    address: address ?? '',
    receiver: data?.receivingAddress ?? '',
    price: data?.price ?? 0,
  });

  const {
    writeAsync: depositAsync,
    isLoading: isDepositLoading,
    isSuccess: isDepositSuccess,
  } = useContractDeposit({
    address: (address as `0x${string}`) ?? '0x',
  });

  const handleSaveInfo = useCallback(() => {
    const typedData = {
      id: data.id || '',
      address: data.address || '',
      receivingAddress: data.receivingAddress || '',
      title: data.title || '',
      description: data.description || '',
      category: data.category || CATEGORIES.GENERAL,
      price: data.price || 0,
      tokenValue: data.tokenValue || 0,
      verified: data.verified || [],
      hidded: data.hidden || false,
    };

    saveStorage([...(currentListedAccount || []), typedData]);
  }, [currentListedAccount, data, saveStorage]);

  const handleListing = async () => {
    await listAsync?.();
    handleSaveInfo();
  };

  const handleDepositing = async () => {
    await depositAsync?.();
  };

  return (
    <Wrapper>
      <GnbListing
        handleListing={handleListing}
        handleDepositing={handleDepositing}
        isLoading={isListLoading || isDepositLoading}
        isListSuccess={isListSuccess}
        isDepositSuccess={isDepositSuccess}
      />
      <ContentWrapper>
        <InputWrapper>
          <BackButton />
          <ListedAccountAbstract />
          <Divider />
          <ListingInputs />
        </InputWrapper>
        <UmaWrapper>
          <ListingUma />
        </UmaWrapper>
        <PortfolioWrapper>
          <PortfolioInnerWrapper>
            <PortfolioTitle>Portfolio</PortfolioTitle>
            <PortfolioTokens data={tokens} />
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

const InputWrapper = tw.div`
  w-886 flex flex-col flex-1 flex-shrink-0 gap-48
`;

const UmaWrapper = tw.div`
  w-886 flex flex-col flex-1 flex-shrink-0 
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
