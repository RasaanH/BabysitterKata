import ratesReturn from './ratesReturn';
const calculator = (startObject, endObject) => {
  const timeRates = ratesReturn();
  if (
    !startObject.hasOwnProperty('index') ||
    !endObject.hasOwnProperty('index')
  ) {
    return '';
  }

  if (startObject.index === endObject.index) {
    return '$0.00';
  }
  if (startObject.index > endObject.index) {
    return '';
  }
  let sumTotal = 0;
  for (let i = startObject.index; i < endObject.index; i++) {
    sumTotal += timeRates[i].rate;
  }
  return `$${sumTotal}.00`;
};
export default calculator;
