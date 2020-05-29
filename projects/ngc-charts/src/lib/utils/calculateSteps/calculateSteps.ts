class StepsParams {
  startFrom?: number;
  isInteger?: boolean;
}

export function calculateQuantitySteps(values: number[], params?: StepsParams): number[] {
  const stepsOptions = {
    startFrom: 0,
    isInteger: true,
    ...params
  }
  let step = 1;
  let numberOfSteps = 4;
  const minDecimalPlacesNo = 6;
  const maxValue = Math.max(...values) - stepsOptions.startFrom;

  if (maxValue <= Math.pow(10, -minDecimalPlacesNo)) {
    stepsOptions.isInteger = true;
  }

  if (maxValue >= numberOfSteps || !stepsOptions.isInteger) {
    const margin = Math.pow(10, Math.round(Math.log10(maxValue) - 1));
    step = Math.ceil(maxValue / numberOfSteps / margin) * margin;
  } 
  
  numberOfSteps = Math.ceil(maxValue / step);

  const lastStep = numberOfSteps * (+step.toFixed(minDecimalPlacesNo));
  if (lastStep === maxValue) {
    numberOfSteps++;
  } 

  const stepsArray = getSteps(numberOfSteps, step, stepsOptions.startFrom, minDecimalPlacesNo);
  return stepsArray;
}

function getSteps(stepsNumber, step, startValue, minDecimalPlacesNo) {
  const steps = [];
  for (let i = 0; i <= stepsNumber; i++) {
    const value = +(i * step + startValue).toFixed(minDecimalPlacesNo);
    steps.push(value);
  }
  return steps;
}