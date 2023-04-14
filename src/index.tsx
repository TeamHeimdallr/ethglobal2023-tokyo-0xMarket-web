import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiConfig } from 'wagmi';

import { mockServiceWorker } from '~/__mocks__';
import EntryRoute from '~/routes';

import { client } from './configs/setup-wallet';
import { IS_MOCK } from './constants';

import '~/styles/build/index.css';

if (IS_MOCK) {
  mockServiceWorker.start({
    onUnhandledRequest: 'bypass',
  });
}

const queryClient = new QueryClient();

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <WagmiConfig client={client}>
    <QueryClientProvider client={queryClient}>
      <EntryRoute />
    </QueryClientProvider>
  </WagmiConfig>
);
