export const convert = (amout: number, rate: number, decimals = 2): number => {
  return Number((amout * rate).toFixed(decimals));
};
