import { format } from 'date-fns';

import iconEth from '~/assets/icons/icon-eth.png';
import iconNft from '~/assets/icons/icon-nft.png';
import iconTransfer from '~/assets/icons/icon-transfer.png';

import { AccountTxHistory, EtherscanNftTx, EtherscanTokenTx, EtherscanTx } from '~/types';

import { DATE_FORMATTER } from '~/constants';

import { parseNumberToSymbol } from './number';
import { parseToken } from './token';

interface ParseTxHistory {
  firstTx?: EtherscanTx;
  allTx?: EtherscanTx[];
  tokenTx?: EtherscanTokenTx[];
  nftTx?: EtherscanNftTx[];
}
export const parseTxHistory = ({ firstTx, allTx, tokenTx, nftTx }: ParseTxHistory) => {
  const firstTxHistory = parseFirstTxHistory(firstTx);
  const txCountsHistory = parseTxCounts(allTx);
  const nftTxCountsHistory = parseNftTxCounts(nftTx);
  const tokenVolumeHistory = parseTokenVolume(tokenTx);

  return [firstTxHistory, txCountsHistory, nftTxCountsHistory, tokenVolumeHistory];
};

export const parseFirstTxHistory = (tx?: EtherscanTx): AccountTxHistory => {
  console.log(tx);
  if (!tx) return {} as AccountTxHistory;
  const timestamp = Number(tx.timeStamp) * 1000;

  return {
    id: Math.random().toString(),
    image: iconEth,
    title: format(new Date(timestamp), DATE_FORMATTER.MMM_d_yyyy),
    description: 'First Tx on Ethereum',
  };
};

export const parseTxCounts = (tx?: EtherscanTx[]): AccountTxHistory => {
  if (!tx || tx.length === 0) return {} as AccountTxHistory;

  return {
    id: Math.random().toString(),
    image: iconEth,
    title: `Over ${parseNumberToSymbol(tx.length || 0)}`,
    description: 'No. of Tx on Ethereum',
  };
};

export const parseNftTxCounts = (tx?: EtherscanNftTx[]): AccountTxHistory => {
  if (!tx || tx.length === 0) return {} as AccountTxHistory;

  return {
    id: Math.random().toString(),
    image: iconNft,
    title: `Over ${parseNumberToSymbol(tx.length || 0)}`,
    description: 'No. of NFT Transfer',
  };
};

export const parseTokenVolume = (tx?: EtherscanTokenTx[]): AccountTxHistory => {
  if (!tx || tx.length === 0) return {} as AccountTxHistory;
  const volume = tx?.reduce((res, t) => (res += parseToken(t.value, t.tokenDecimal) || 0), 0);

  return {
    id: Math.random().toString(),
    image: iconTransfer,
    title: `Over ${parseNumberToSymbol(volume)}`,
    description: 'Tx Vol. of Token Transfer',
  };
};
