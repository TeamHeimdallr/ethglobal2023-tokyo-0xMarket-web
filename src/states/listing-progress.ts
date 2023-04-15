import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { logger } from '~/states/middleware/logger';

export interface ListingProgressState {
  progress: number; // 0: abstract 1: detail
  setProgress: (progress: number) => void;
  resetProgress: () => void;
}

export const useListingProgressState = create<ListingProgressState>()(
  immer(
    logger(set => ({
      name: 'listing-progress-store',
      progress: 0,
      setProgress: (progress: number) => set(() => ({ progress })),
      resetProgress: () => set(() => ({ progress: 0 })),
    }))
  )
);
