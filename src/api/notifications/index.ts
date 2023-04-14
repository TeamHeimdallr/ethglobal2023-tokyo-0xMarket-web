import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { api } from '~/api/axios';

interface Notification {
  id: string;

  account: string;
  message: string;

  timestamp: number;
  isNew: boolean;

  image?: string;
}

interface NotificationsResponse {
  data: Notification[];
}
interface ReadNotificationsResponse {
  data: Notification[] | null;
}

type NotificationssQueryOptions = UseQueryOptions<
  NotificationsResponse,
  AxiosError<NotificationsResponse, null>
>;
const getNotificationsAxios = async () =>
  (await api.get<NotificationsResponse>('/notifications')).data;

export const useNotificationsQuery = (options?: NotificationssQueryOptions) =>
  useQuery<NotificationsResponse, AxiosError<NotificationsResponse, null>>(
    ['notifications', 'get-notifications'],
    getNotificationsAxios,
    options
  );

type ReadNotificationsMutateOptions = UseMutationOptions<
  ReadNotificationsResponse,
  AxiosError<ReadNotificationsResponse, null>,
  null
>;
const readNotificationsAxios = async () =>
  (
    await api.post<ReadNotificationsResponse, AxiosResponse<ReadNotificationsResponse>, null>(
      '/notification/read'
    )
  ).data;
export const useReadNotificationsMutate = (options?: ReadNotificationsMutateOptions) =>
  useMutation<ReadNotificationsResponse, AxiosError<ReadNotificationsResponse, null>, null>(
    ['notifications', 'read-notifications'],
    readNotificationsAxios,
    { ...options }
  );
