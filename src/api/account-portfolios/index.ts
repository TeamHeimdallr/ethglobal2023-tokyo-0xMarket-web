import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { api } from '~/api/axios';

import {
  AccountInGameInfo,
  AccountLockupToken,
  AccountNftSbt,
  AccountStakingAsset,
  AccountToken,
  AccountTxHistory,
} from '~/types';

interface AccountInGameInfosResponse {
  data: AccountInGameInfo[];
}
interface AccountTokensResponse {
  data: AccountToken[];
}
interface AccountNftsResponse {
  data: AccountNftSbt[];
}
interface AccountSbtsResponse {
  data: AccountNftSbt[];
}
interface AccountLockupTokensResponse {
  data: AccountLockupToken[];
}
interface AccountStakingAssetsResponse {
  data: AccountStakingAsset[];
}
interface AccountTxHistoriesResponse {
  data: AccountTxHistory[];
}

export const useAccountInGameInfosQuery = (
  id: string,
  options?: UseQueryOptions<
    AccountInGameInfosResponse,
    AxiosError<AccountInGameInfosResponse, null>
  >
) =>
  useQuery<AccountInGameInfosResponse, AxiosError<AccountInGameInfosResponse, null>>(
    ['account-portfolio', 'in-game-infos'],
    async () =>
      (await api.get<AccountInGameInfosResponse>(`/account/${id}/portfolio/in-game-infos`)).data,
    options
  );

export const useAccountTokensQuery = (
  id: string,
  options?: UseQueryOptions<AccountTokensResponse, AxiosError<AccountTokensResponse, null>>
) =>
  useQuery<AccountTokensResponse, AxiosError<AccountTokensResponse, null>>(
    ['account-portfolio', 'tokens'],
    async () => (await api.get<AccountTokensResponse>(`/account/${id}/portfolio/tokens`)).data,
    options
  );

export const useAccountNftsQuery = (
  id: string,
  options?: UseQueryOptions<AccountNftsResponse, AxiosError<AccountNftsResponse, null>>
) =>
  useQuery<AccountNftsResponse, AxiosError<AccountNftsResponse, null>>(
    ['account-portfolio', 'nfts'],
    async () => (await api.get<AccountNftsResponse>(`/account/${id}/portfolio/nfts`)).data,
    options
  );

export const useAccountSbtsQuery = (
  id: string,
  options?: UseQueryOptions<AccountSbtsResponse, AxiosError<AccountSbtsResponse, null>>
) =>
  useQuery<AccountSbtsResponse, AxiosError<AccountSbtsResponse, null>>(
    ['account-portfolio', 'sbts'],
    async () => (await api.get<AccountSbtsResponse>(`/account/${id}/portfolio/sbts`)).data,
    options
  );

export const useAccountLockupTokensQuery = (
  id: string,
  options?: UseQueryOptions<
    AccountLockupTokensResponse,
    AxiosError<AccountLockupTokensResponse, null>
  >
) =>
  useQuery<AccountLockupTokensResponse, AxiosError<AccountLockupTokensResponse, null>>(
    ['account-portfolio', 'lockup-tokens'],
    async () =>
      (await api.get<AccountLockupTokensResponse>(`/account/${id}/portfolio/lock-up-tokens`)).data,
    options
  );

export const useAccountStakingAssetsQuery = (
  id: string,
  options?: UseQueryOptions<
    AccountStakingAssetsResponse,
    AxiosError<AccountStakingAssetsResponse, null>
  >
) =>
  useQuery<AccountStakingAssetsResponse, AxiosError<AccountStakingAssetsResponse, null>>(
    ['account-portfolio', 'staking-assets'],
    async () =>
      (await api.get<AccountStakingAssetsResponse>(`/account/${id}/portfolio/staking-assets`)).data,
    options
  );

export const useAccountTxHistoriesQuery = (
  id: string,
  options?: UseQueryOptions<
    AccountTxHistoriesResponse,
    AxiosError<AccountTxHistoriesResponse, null>
  >
) =>
  useQuery<AccountTxHistoriesResponse, AxiosError<AccountTxHistoriesResponse, null>>(
    ['account-portfolio', 'tx-histories'],
    async () =>
      (await api.get<AccountTxHistoriesResponse>(`/account/${id}/portfolio/tx-histories`)).data,
    options
  );
