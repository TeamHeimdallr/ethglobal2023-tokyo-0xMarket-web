import iconEth from '~/assets/icons/icon-eth.png';

import { AccountStakingAsset, AccountToken } from '~/types';

import { price } from '~/__mocks__/data/token-price';

export const parseLidoStakingAsset = (lido: AccountToken | undefined): AccountStakingAsset => {
  if (!lido) return {} as AccountStakingAsset;

  return {
    id: lido.id,
    image: iconEth,
    token: {
      name: lido.token.symbol,
      value: `${lido.formattedAmount}`,
    },
    tokenValue:
      lido.formattedAmount *
      (Number(price.find(p => p.symbol === lido.token.symbol)?.lastPriceUSD) || 0),
    stakedAt: 'Lido',
  };
};

export const parseToken = (token: string, decimals = '18'): number => {
  const divisor = BigInt(10) ** BigInt(decimals);
  const result = BigInt(token) / divisor;
  return parseFloat(result.toString());
};
