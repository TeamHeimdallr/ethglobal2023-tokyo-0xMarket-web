import React from 'react';
import type { Preview } from '@storybook/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { WagmiConfig } from 'wagmi';

import { client } from '../src/configs/setup-wallet';
import '../src/styles/build/index.css';

initialize({
  onUnhandledRequest: 'bypass',
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
    },
  },
});
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Components', 'Pages'],
        locales: 'en-US',
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    mswDecorator,
    (Story, context) => (
      <WagmiConfig client={client}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Story {...context} />
          </BrowserRouter>
        </QueryClientProvider>
      </WagmiConfig>
    ),
  ],
};

export default preview;
