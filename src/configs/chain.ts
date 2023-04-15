export const zkscroll = {
  id: 534353,
  name: 'Scroll Alpha Testnet',
  network: 'scroll-testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'Scroll ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://alpha-rpc.scroll.io/l2'],
    },
    public: {
      http: ['https://alpha-rpc.scroll.io/l2'],
    },
  },
  blockExplorers: {
    etherscan: {
      name: 'Scroll Alpha Chain Explorer',
      url: 'https://blockscout.scroll.io',
    },
    default: {
      name: 'Scroll Alpha Chain Explorer',
      url: 'https://blockscout.scroll.io',
    },
  },
  testnet: true,
};
