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
