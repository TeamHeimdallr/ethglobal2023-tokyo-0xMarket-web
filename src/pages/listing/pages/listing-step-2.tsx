import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';
import tw from 'twin.macro';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
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
import { useContractAssert } from '~/api/contract/assertDataFor';
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
import { useListingProgressState } from '~/states/listing-progress';
import { useListingUmaState } from '~/states/listing-uma';

import {
  Account,
  AccountEthBalance,
  AccountUmaVerified,
  CATEGORIES,
  UMA_VERIFY_STATUS,
} from '~/types';

import { price } from '~/__mocks__/data/token-price';
import { DEFAULT_CHAIN_ID, LISTED_LOCAL_KEY } from '~/constants';

import { BackButton } from '../components/back-button';
import { ListingInputs } from '../components/lising-inputs';
import { ListedAccountAbstract } from '../components/listed-account-abstract';
import { ListingUma } from '../components/listing-uma';

export const ListingStep2 = () => {
  const navigate = useNavigate();
  const { resetProgress } = useListingProgressState();

  const { data } = useListingDataState();
  const { data: umaData } = useListingUmaState();

  const { address: addressData } = data;
  const address = addressData ?? '';
  const enabled = !!address && ethers.utils.isAddress(address);

  const { data: ethBalance } = useBalance({
    chainId: DEFAULT_CHAIN_ID,
    address: address as `0x{string}`,
    enabled: !!address && ethers.utils.isAddress(address),
  });

  const currentListedAccount = useReadLocalStorage<Account[]>(LISTED_LOCAL_KEY);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, saveStorage] = useLocalStorage<Account[]>(LISTED_LOCAL_KEY, currentListedAccount || []);

  const { data: inGameInfo } = useAccountInGameInfosQuery(address, {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: false,
  });

  const { data: tokenData } = useAccountTokensQuery(address, {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled,
  });

  const { data: lockupTokens } = useAccountLockupTokensQuery(address, {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: false,
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

  const ethTokenValue = ethBalance
    ? Number(price.find(p => p.symbol === ethBalance?.symbol)?.lastPriceUSD || 0) || 0
    : 0;
  const ethTotalValue = Number(ethBalance?.formatted ?? 0) * ethTokenValue;
  const totalValue = () => {
    const tokenValues =
      tokens?.reduce((res, d) => {
        const tokenPrice =
          Number(price.find(p => p.symbol === d.token.symbol)?.lastPriceUSD || 0) *
            d.formattedAmount || 0;

        return (res += tokenPrice);
      }, 0) ?? 0;

    return tokenValues + ethTotalValue;
  };

  const {
    writeAsync: depositAsync,
    isLoading: isDepositLoading,
    isSuccess: isDepositSuccess,
  } = useContractDeposit({
    address: (address as `0x${string}`) ?? '0x',
  });

  const {
    writeAsync: listAsync,
    isLoading: isListLoading,
    isSuccess: isListSuccess,
  } = useContractList({
    address: address ?? '',
    receiver: data?.receivingAddress ?? '',
    price: data?.price ?? 0,
    deposit: isDepositSuccess,
  });

  const handleSaveInfo = () => {
    const typedUmaData: AccountUmaVerified[] = umaData
      ? Object.keys(umaData)
          .map(key => {
            const value = umaData[key];
            return {
              id: key.toString(),
              status: UMA_VERIFY_STATUS.PENDING,
              text: value || '',
              date: new Date(),
            };
          })
          .filter(d => !!d.text)
      : [];

    const typedData = {
      id: data.id || data.address || '',
      address: data.address || '',
      receivingAddress: data.receivingAddress || '',
      title: data.title || '',
      description: data.description || '',
      category: data.category || CATEGORIES.GENERAL,
      price: data.price || 0,
      tokenValue: totalValue(),
      verified: typedUmaData,
      hidded: data.hidden || false,
    };

    saveStorage([...(currentListedAccount || []), typedData]);
  };

  const statement = useMemo(
    () => (umaData ? Object.keys(umaData).map(key => umaData[key])[0] ?? '' : ''),
    [umaData]
  );

  const handleListing = async () => {
    await listAsync?.();
    handleSaveInfo();
  };

  const handleDepositing = async () => {
    await depositAsync?.();
  };

  const {
    writeAsync: assertAsync,
    isLoading: isAssertLoading,
    isSuccess: isAssertSuccess,
  } = useContractAssert({
    statement,
    asserter: address ?? '',
  });

  useEffect(() => {
    if (isListSuccess && !isAssertLoading) {
      const assertApi = async () => {
        await assertAsync?.();
      };
      assertApi();
    }
  }, [assertAsync, isAssertLoading, isListSuccess]);

  useEffect(() => {
    if (isAssertSuccess || (isListSuccess && !statement)) {
      navigate(`/${data.address}`);
      resetProgress();
    }
  }, [data.address, statement, isListSuccess, isAssertSuccess, navigate, resetProgress]);

  return (
    <Wrapper>
      <GnbListing
        handleListing={handleListing}
        handleDepositing={handleDepositing}
        isLoading={isListLoading || isDepositLoading || isAssertLoading}
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
