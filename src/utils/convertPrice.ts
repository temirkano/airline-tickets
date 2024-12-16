const currencyRates = {
  RUB: 1,
  USD: 9.65,
  EUR: 9.18,
};

export const convertPrice = (price: number, currency: string): number => {
  const rate = currencyRates[currency as keyof typeof currencyRates];
  return Math.round(price * (rate || 1));
};
