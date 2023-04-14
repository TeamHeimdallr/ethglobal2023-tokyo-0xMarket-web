import { bsc, bscTestnet } from '@wagmi/chains';
import { configureChains, createClient, goerli, mainnet } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { publicProvider } from 'wagmi/providers/public';

const chains = [bscTestnet, bsc, goerli, mainnet];
const { provider, webSocketProvider } = configureChains(chains, [publicProvider()]);

const client = createClient({
  autoConnect: true,
  connectors: [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
});

export { chains, client };
