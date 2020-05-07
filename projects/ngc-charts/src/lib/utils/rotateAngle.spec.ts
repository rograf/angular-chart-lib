import { getRotateAngle } from './rotateAngle';
fdescribe('[FUNCTION] getRotateAngle', () => {
  const rotateAngle = getRotateAngle;

  it('should return 0', () => {
    const arrayLength = 20;
    const arrayOfRandomNumbers = () => Array.from({length: arrayLength}, () => Math.floor(Math.random() * 100 ));

    const columnsWidthPx: number[] = arrayOfRandomNumbers();
    const labelsWidthPx: number[] = arrayOfRandomNumbers();

    for (let i = 0; i < arrayLength; i++) {
      if (columnsWidthPx[i] >= labelsWidthPx[i]) {
        expect(rotateAngle(columnsWidthPx[i], labelsWidthPx[i])).toEqual(0);
      }
    }
  });

  it('should return -18', () => {
    expect(rotateAngle(100, 105)).toEqual(-18);
  });

  it('should return -34', () => {
    expect(rotateAngle(100, 120)).toEqual(-34);
  });

  it('should return -48', () => {
    expect(rotateAngle(100, 150)).toEqual(-48);
  });

  it('should return -60', () => {
    expect(rotateAngle(100, 200)).toEqual(-60);
  });

  it('should return -71', () => {
    expect(rotateAngle(100, 300)).toEqual(-71);
  });

  it('should return -76', () => {
    expect(rotateAngle(100, 400)).toEqual(-76);
  });

  it('should return -78', () => {
    expect(rotateAngle(100, 500)).toEqual(-78);
  });

  it('should return -90', () => {
    expect(rotateAngle(100, 12000)).toEqual(-90);
  });
});
