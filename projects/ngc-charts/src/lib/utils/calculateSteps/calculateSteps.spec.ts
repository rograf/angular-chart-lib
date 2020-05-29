import { calculateQuantitySteps } from './calculateSteps'

fdescribe('[FUNCTION] calculateSteps', () => {

  it('should return integer steps with 0 as first step', () => {
    const steps = calculateQuantitySteps([20, 56, 77, 2, 15, 90]);
    const firstStep = steps[0];
    expect(firstStep).toEqual(0);
    expect(steps).toEqual([0, 30, 60, 90, 120]);
  });

  it('should return integer steps with last step bigger then max value', () => {
    const values = [7002, 5648, 73, 2500];
    const steps = calculateQuantitySteps(values);
    const maxVal = Math.max(...values);
    const lastStep = steps[steps.length-1];
    steps.forEach(el=>expect(Number.isInteger(el)).toBeTruthy());
    expect(lastStep).toBeGreaterThan(maxVal);
    expect(steps).toEqual([0, 2000, 4000, 6000, 8000]);
  });

  it('should return only two steps (0,1), when there are only 0 values', () => {
    const steps = calculateQuantitySteps([0, 0, 0, 0]);
    expect(steps.length).toEqual(2);
    expect(steps).toEqual([0, 1]);
  });
  
  it('should return integer steps, when isInteger flag is default set to true', () => {
    const steps = calculateQuantitySteps([1, 2, 2.5, 1.2]);
    steps.forEach(el=>expect(Number.isInteger(el)).toBeTruthy());
    expect(steps).toEqual([0, 1, 2, 3]);
  });
 
  it('should return decimal steps with small values, when isInteger flag is set to false', () => {
    expect(calculateQuantitySteps([0.1, 2, 0.7, 1.2], {isInteger: false})).toEqual([0, 0.5, 1, 1.5, 2, 2.5]);
  });

  it('should return integer steps starting from startFrom value', () => {
    const values = [1200, 568, 73, 200];
    const startVal = 400;
    const steps = calculateQuantitySteps(values, {startFrom: startVal});
    expect(steps[0]).toEqual(startVal);
    expect(steps).toEqual([400, 600, 800, 1000, 1200, 1400]);
  });
  
  it('should return decimal steps, if max value is bigger or equal 0.00001', () => {
    expect(calculateQuantitySteps([0.00001, 0.00000002, 0.00000007, 0.0000000000000054], {isInteger: false})).toEqual([0, 0.000003, 0.000006, 0.000009, 0.000012]);
  });
  
  it('should return integer steps, if max value is smaller then 0.00001 even if isInteger flag is set to false', () => {
    const steps = calculateQuantitySteps([0.000001, 0.00000002, 0.00000007, 0.0000000000000054], {isInteger: false});
    steps.forEach(el=>expect(Number.isInteger(el)).toBeTruthy());
    expect(steps).toEqual([0, 1]);
  });

});
