import { calculateQuantitySteps } from './calculateSteps'

fdescribe('calculateSteps', () => {

  it('calculateQuantitySteps should return integer steps with 0 as first step', () => {
    expect(calculateQuantitySteps([20, 56, 77, 2, 15, 90])).toEqual([0, 30, 60, 90, 120]);
  });

  it('calculateQuantitySteps should return integer steps with last step bigger then max value', () => {
    expect(calculateQuantitySteps([7002, 5648, 73, 2500])).toEqual([0, 2000, 4000, 6000, 8000]);
  });

  it('calculateQuantitySteps with 0 values should return only two steps (0,1)', () => {
    expect(calculateQuantitySteps([0, 0, 0, 0])).toEqual([0, 1]);
  });

  it('calculateQuantitySteps should return integer steps starting from startFrom value', () => {
    expect(calculateQuantitySteps([1200, 568, 73, 200], {startFrom: 400})).toEqual([400, 600, 800, 1000, 1200, 1400]);
  });
  
  it('calculateQuantitySteps should return integer steps', () => {
    expect(calculateQuantitySteps([1, 2, 2.5, 1.2])).toEqual([0, 1, 2, 3]);
  });
 
  it('calculateQuantitySteps should return decimal steps starting from startFrom value', () => {
    expect(calculateQuantitySteps([0.1, 2, 0.7, 1.2], {startFrom: 0.5, isInteger: false})).toEqual([0.5, 0.9, 1.3, 1.7, 2.1]);
  });

  it('calculateQuantitySteps with small values should return decimal steps', () => {
    expect(calculateQuantitySteps([0.1, 2, 0.7, 1.2], {isInteger: false})).toEqual([0, 0.5, 1, 1.5, 2, 2.5]);
  });

  it('calculateQuantitySteps with small values should return integer steps, when isInteger flag is default set to true', () => {
    expect(calculateQuantitySteps([0.1, 2, 0.7, 1.2])).toEqual([0, 1, 2, 3]);
  });
  
  it('calculateQuantitySteps should return decimal steps, if max value is bigger or equal 0.00001', () => {
    expect(calculateQuantitySteps([0.00001, 0.00000002, 0.00000007, 0.0000000000000054], {isInteger: false})).toEqual([0, 0.000003, 0.000006, 0.000009, 0.000012]);
  });
  
  it('calculateQuantitySteps should return integer steps, if max value is smaller then 0.00001 even if isInteger flag is set to false', () => {
    expect(calculateQuantitySteps([0.000001, 0.00000002, 0.00000007, 0.0000000000000054], {isInteger: false})).toEqual([0, 1]);
  });

});
