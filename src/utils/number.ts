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
