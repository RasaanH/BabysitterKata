import calculator from './calculator';
import ratesReturn from './ratesReturn';

describe('Calculator Tests', () => {
  const rates = ratesReturn();
  const findTime = hour => rates.find(rateObject => rateObject.value === hour);

  it('should correctly calculate the fee from 7 to 9 pm', () => {
    const sevenObject = findTime(19);
    const nineObject = findTime(21);
    const fee = calculator(sevenObject, nineObject);
    console.log({sevenObject, nineObject, fee});
    expect(fee).toEqual('$24.00');
  });

  it('should correctly calculate the fee from 11 pm to 4 am', () => {
    const elevenObject = findTime(23);
    const fourObject = findTime(4);
    const fee = calculator(elevenObject, fourObject);
    expect(fee).toEqual('$72.00');
  });
});
