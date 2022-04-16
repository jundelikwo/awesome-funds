import numeral from 'numeral';

interface formatCurrencyType {
  amount: number | undefined;
  shortened?: boolean;
  hideCurrency?: boolean;
  nairaOnly?: boolean;
  koboOnly?: boolean;
}

export const formatCurrency = ({
  amount = 0,
  shortened = false,
  hideCurrency = false,
  nairaOnly = false,
  koboOnly = false,
}: formatCurrencyType): string => {
  if (shortened) {
    const format = nairaOnly ? '0a' : '0.0a';
    let formatted = numeral(amount / 100).format(format, Math.floor);
    if (!hideCurrency) {
      formatted = `₦ ${formatted}`;
    }
    return formatted;
  }

  const formatted = `₦${numeral(amount / 100).format('0,0.00', Math.round)}`;
  if (nairaOnly) {
    const removeNaira = formatted.substring(1);
    return removeNaira.split('.')[0];
  }
  if (koboOnly) {
    const removeNaira = formatted.substring(1);
    return `.${removeNaira.split('.')[1]}`;
  }
  if (hideCurrency) {
    return formatted.substring(1);
  }
  return formatted;
};
