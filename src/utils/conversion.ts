export const convert = (amout: number, rate: number, precision = 2): number => {
  return Number((amout * rate).toFixed(precision));
};
