interface ParseNumberCommaSeperator {
  number: number;

  prefix?: string;
  suffix?: string;
  decimalPoint?: number;
}
export const parseNumberCommaSeperator = ({
  number,
  prefix,
  suffix,
  decimalPoint = 0,
}: ParseNumberCommaSeperator): string => {
  const commaSeperatorRegexp = /\B(?=(\d{3})+(?!\d))/g;
  let parsedNumber = number.toFixed(decimalPoint).replace(commaSeperatorRegexp, ',');

  if (prefix) parsedNumber = `${prefix}` + parsedNumber;
  if (suffix) parsedNumber = parsedNumber + `${suffix}`;

  return parsedNumber;
};

export const parseNumberToString = (num: number | string, decimalPoint = 4) => {
  const commaSeperatorRegexp = /\B(?=(\d{3})+(?!\d))/g;
  const parsedNumber = `${Number(Number(num).toFixed(decimalPoint)) || 0}`.replace(
    commaSeperatorRegexp,
    ','
  );

  return parsedNumber;
};

export const parseNumberToSymbol = (num?: number | string) => {
  if (!num || isNaN(Number(num))) return '0';

  const absNumber = Math.abs(Number(num));

  const originNumber = Number(num);

  const QUADRILLION = 1.0e15;
  const TRILLION = 1.0e12;
  const BILLION = 1.0e9;
  const MILLION = 1.0e6;
  const K = 1.0e3;

  if (absNumber >= QUADRILLION) return Number((originNumber / QUADRILLION).toFixed(2)) + 'Q';
  if (absNumber >= TRILLION) return Number((originNumber / TRILLION).toFixed(2)) + 'T';
  if (absNumber >= BILLION) return Number((originNumber / BILLION).toFixed(2)) + 'B';
  if (absNumber >= MILLION) return Number((originNumber / MILLION).toFixed(2)) + 'M';
  if (absNumber >= K) return Number((originNumber / K).toFixed(2)) + 'K';
  return num.toString();
};
