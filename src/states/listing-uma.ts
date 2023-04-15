import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { logger } from '~/states/middleware/logger';

export interface ListingUmaState {
  active: boolean;
  toggleActive: () => void;

  data: Record<string, string | undefined>;
  setData: (idx: string, data?: string) => void;
  resetData: () => void;
}

export const useListingUmaState = create<ListingUmaState>()(
  immer(
    logger(set => ({
      name: 'listing-uma-store',

      active: false,
      toggleActive: () => set(state => ({ active: !state.active })),

      data: {
        '0': '',
      },
      setData: (idx: string, data?: string) =>
        set(state => ({ data: { ...state.data, [idx]: data } })),
      resetData: () => set({ data: {} }),
    }))
  )
);
