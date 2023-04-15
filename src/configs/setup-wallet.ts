import { configureChains, createClient, goerli } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { publicProvider } from 'wagmi/providers/public';

import { zkscroll } from './chain';

const chains = [goerli, zkscroll];
const { provider, webSocketProvider } = configureChains(chains, [publicProvider()]);

const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
});

export { chains, client };
