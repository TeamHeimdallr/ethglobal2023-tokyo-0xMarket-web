import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { api } from '~/api/axios';

import { AccountDiscover } from '~/types';

interface AccountDiscoversResponse {
  data: AccountDiscover[];
}
type AccountDiscoversQueryOptions = UseQueryOptions<
  AccountDiscoversResponse,
  AxiosError<AccountDiscoversResponse, null>
>;
const getAccountDiscoversAxios = async () =>
  (await api.get<AccountDiscoversResponse>('/accounts')).data;

export const useAccountDiscoversQuery = (options?: AccountDiscoversQueryOptions) =>
  useQuery<AccountDiscoversResponse, AxiosError<AccountDiscoversResponse, null>>(
    ['accounts', 'get-account-discovers'],
    getAccountDiscoversAxios,
    options
  );

// interface AccountResponse {
//   data: Account;
// }
// type AccountQueryOptions = UseQueryOptions<AccountResponse, AxiosError<AccountResponse, null>>;
// const getAccountAxios = async (id: string) =>
//   (await api.get<AccountResponse>(`/account/${id}`)).data;

// export const useAccountQuery = (id: string, options?: AccountQueryOptions) =>
//   useQuery<AccountResponse, AxiosError<AccountResponse, null>>(
//     ['accounts', 'get-account'],
//     () => getAccountAxios(id),
//     options
//   );
