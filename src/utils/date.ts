import { formatDistanceToNowStrict } from 'date-fns';

export const elapsedTime = (timestamp?: number) => {
  if (!timestamp) return '';

  const diff = Date.now() - timestamp;
  if (diff < 60000) {
    return 'Just now';
  } else {
    return formatDistanceToNowStrict(timestamp) + ' ago';
  }
};
