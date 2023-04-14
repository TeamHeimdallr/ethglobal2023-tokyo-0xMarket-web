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

export const randomDate = (start: Date, end: Date) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};
