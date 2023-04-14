import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import request from 'graphql-request';

import { api } from '~/api/axios';

import {
  AccountInGameInfo,
  AccountLockupToken,
  AccountTokenAll,
  EtherscanNftTx,
  EtherscanTokenTx,
  EtherscanTx,
} from '~/types';

import { AIRSTACK_API_URL, API_URL_ETHERSCAN, ETHERSCAN_API_KEY } from '~/constants';

import { tokenGraphql } from '../graphql/token';

interface AccountInGameInfosResponse {
  data: AccountInGameInfo[];
}
interface AccountTokensResponse {
  data: AccountTokenAll;
}

interface AccountLockupTokensResponse {
  data: AccountLockupToken[];
}
export const useAccountInGameInfosQuery = (
  account: string,
  options?: UseQueryOptions<
    AccountInGameInfosResponse,
    AxiosError<AccountInGameInfosResponse, null>
  >
) =>
  useQuery<AccountInGameInfosResponse, AxiosError<AccountInGameInfosResponse, null>>(
    ['account-portfolio', 'in-game-infos', account],
    async () =>
      (await api.get<AccountInGameInfosResponse>(`/account/${account}/portfolio/in-game-infos`))
        .data,
    options
  );

export const useAccountLockupTokensQuery = (
  account: string,
  options?: UseQueryOptions<
    AccountLockupTokensResponse,
    AxiosError<AccountLockupTokensResponse, null>
  >
) =>
  useQuery<AccountLockupTokensResponse, AxiosError<AccountLockupTokensResponse, null>>(
    ['account-portfolio', 'lockup-tokens', account],
    async () =>
      (await api.get<AccountLockupTokensResponse>(`/account/${account}/portfolio/lock-up-tokens`))
        .data,
    options
  );

export const useAccountTokensQuery = (
  account: string,
  options?: UseQueryOptions<AccountTokensResponse>
) =>
  useQuery<AccountTokensResponse>(
    ['account-portfolio', 'tokens', account],
    async () => request(AIRSTACK_API_URL, tokenGraphql, { address: account }),
    options
  );

interface EtherscanTxResponse {
  data: {
    status: string;
    message: string;
    result: EtherscanTx[];
  };
}
export const useFirstTxQuery = (
  account?: string,
  options?: UseQueryOptions<EtherscanTxResponse, AxiosError<EtherscanTxResponse, null>>
) =>
  useQuery<EtherscanTxResponse, AxiosError<EtherscanTxResponse, null>>(
    ['query', 'first-tx', account],
    async () =>
      (
        await axios.get<EtherscanTxResponse>(
          `${API_URL_ETHERSCAN}?module=account&action=txlist&address=${account}&startblock=0&offset=1&sort=asc&apikey=${ETHERSCAN_API_KEY}`
        )
      ).data,
    options
  );

export const useAllTxQuery = (
  account?: string,
  options?: UseQueryOptions<EtherscanTxResponse, AxiosError<EtherscanTxResponse, null>>
) =>
  useQuery<EtherscanTxResponse, AxiosError<EtherscanTxResponse, null>>(
    ['query', 'all-tx', account],
    async () =>
      (
        await axios.get<EtherscanTxResponse>(
          `${API_URL_ETHERSCAN}?module=account&action=txlist&address=${account}&startblock=0&offset=10000&sort=asc&apikey=${ETHERSCAN_API_KEY}`
        )
      ).data,
    options
  );

interface EtherscanTokenTxResponse {
  data: {
    status: string;
    message: string;
    result: EtherscanTokenTx[];
  };
}
export const useTokenTxQuery = (
  account?: string,
  options?: UseQueryOptions<EtherscanTokenTxResponse, AxiosError<EtherscanTokenTxResponse, null>>
) =>
  useQuery<EtherscanTokenTxResponse, AxiosError<EtherscanTokenTxResponse, null>>(
    ['query', 'tx-counts', 'token', account],
    async () =>
      (
        await axios.get<EtherscanTokenTxResponse>(
          `${API_URL_ETHERSCAN}?module=account&action=tokentx&address=${account}&offset=10000&startblock=0&endblock=99999999&sort=asc&apikey=${ETHERSCAN_API_KEY}`
        )
      ).data,
    options
  );

interface EtherscanNftTxResponse {
  data: {
    status: string;
    message: string;
    result: EtherscanNftTx[];
  };
}
export const useNftTxQuery = (
  account?: string,
  options?: UseQueryOptions<EtherscanNftTxResponse, AxiosError<EtherscanNftTxResponse, null>>
) =>
  useQuery<EtherscanNftTxResponse, AxiosError<EtherscanNftTxResponse, null>>(
    ['query', 'tx-counts', 'nft', account],
    async () =>
      (
        await axios.get<EtherscanNftTxResponse>(
          `${API_URL_ETHERSCAN}?module=account&action=tokennfttx&address=${account}&offset=10000&startblock=0&endblock=99999999&sort=asc&apikey=${ETHERSCAN_API_KEY}`
        )
      ).data,
    options
  );
