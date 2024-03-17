import numeral from 'numeral';

// ----------------------------------------------------------------------

export function formatNumber(number, formatType = 'number') {
  let format;

  switch (formatType) {
    case 'currency':
      format = numeral(number).format('$0,0.00');
      break;
    case 'percent':
      format = numeral(Number(number) / 100).format('0.0%');
      break;
    case 'shorten':
      format = numeral(number).format('0.00a');
      break;
    case 'data':
      format = numeral(number).format('0.0 b');
      break;
    default:
      format = numeral(number).format();
      break;
  }

  return format;
}

export function stripTrailingZeros(formattedNumber) {
  return formattedNumber.includes('.')
    ? formattedNumber.replace(/\.?0+$/, '')
    : formattedNumber;
}

