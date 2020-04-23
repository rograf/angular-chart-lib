import { calculateQuantitySteps } from './calculateSteps'

describe('calculateSteps', () => {

  it('should create', () => {
    expect(calculateQuantitySteps([20, 56, 77, 2, 15, 90])).toEqual([0, 30, 60, 90, 120]);
  });

  it('should create', () => {
    expect(calculateQuantitySteps([7002, 5648, 73, 2500])).toEqual([0, 2000, 4000, 6000, 8000]);
  });

  it('should create', () => {
    expect(calculateQuantitySteps([0, 0, 0, 0])).toEqual([0, 1]);
  });

  it('should create', () => {
    expect(calculateQuantitySteps([1200, 568, 73, 200], {startFrom: 400})).toEqual([400, 600, 800, 1000, 1200, 1400]);
  });
  
  it('should create', () => {
    expect(calculateQuantitySteps([1, 2, 2.5, 1.2])).toEqual([0, 1, 2, 3]);
  });
  
  it('should create', () => {
    expect(calculateQuantitySteps([1, 2, 2.5, 1.2], {isInteger: false})).toEqual([0, 0.7, 1.4, 2.1, 2.8]);
  });

  it('should create', () => {
    expect(calculateQuantitySteps([0.1, 2, 0.7, 1.2], {startFrom: 0.5, isInteger: false})).toEqual([0.5, 0.9, 1.3, 1.7, 2.1]);
  });

  it('should create', () => {
    expect(calculateQuantitySteps([0.1, 2, 0.7, 1.2], {isInteger: false})).toEqual([0, 0.5, 1, 1.5, 2, 2.5]);
  });

  it('should create', () => {
    expect(calculateQuantitySteps([0.1, 2, 0.7, 1.2])).toEqual([0, 1, 2, 3]);
  });

  it('should create', () => {
    expect(calculateQuantitySteps([0.000001, 0.00000002, 0.00000007, 0.0000000000000054], {isInteger: false})).toEqual([0, 1]);
  });

  it('should create', () => {
    expect(calculateQuantitySteps([0.00001, 0.00000002, 0.00000007, 0.0000000000000054], {isInteger: false})).toEqual([0, 0.000003, 0.000006, 0.000009, 0.000012]);
  });
});
