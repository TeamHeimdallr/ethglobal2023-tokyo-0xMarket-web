import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { logger } from '~/states/middleware/logger';

import { ListingAccount } from '~/types';

export interface ListingDataState {
  data: ListingAccount;
  setData: (data: ListingAccount) => void;
  resetData: () => void;
}

export const useListingDataState = create<ListingDataState>()(
  immer(
    logger(set => ({
      name: 'listing-data-store',
      data: {},
      setData: (data: ListingAccount) => set(state => ({ data: { ...state.data, ...data } })),
      resetData: () => set({ data: {} }),
    }))
  )
);
