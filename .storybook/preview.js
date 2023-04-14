import '../src/styles/build/index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { initialize, mswDecorator } from 'msw-storybook-addon';
import { MINIMAL_VIEWPORTS, INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { WagmiConfig } from 'wagmi';

import { client } from '../src/configs/setup-wallet';

// MSW initialize
initialize({
  onUnhandledRequest: 'bypass',
});

const mobileViewport = {
  mobile3: {
    name: 'mobile-default',
    styles: {
      height: '640px',
      width: '360px',
    },
    type: 'mobile',
  },
};

export const parameters = {
  layout: 'fullscreen',
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Components', 'Pages'],
      locales: 'en-US',
    },
  },
  viewport: {
    viewports: { ...INITIAL_VIEWPORTS, ...MINIMAL_VIEWPORTS, ...mobileViewport },
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchIntervalInBackground: false,
    },
  },
});

export const decorators = [
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
];
