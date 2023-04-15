import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { logger } from '~/states/middleware/logger';

import { Account } from '~/types';

export interface ListingDataState {
  data: Partial<Account>;
  setData: (data: Partial<Account>) => void;
  resetData: () => void;
}

export const useListingDataState = create<ListingDataState>()(
  immer(
    logger(set => ({
      name: 'listing-data-store',
      data: {},
      setData: (data: Partial<Account>) => set(state => ({ data: { ...state.data, ...data } })),
      resetData: () => set({ data: {} }),
    }))
  )
);
