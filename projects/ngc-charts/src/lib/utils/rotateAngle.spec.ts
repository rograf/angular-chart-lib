import { getRotateAngle } from './rotateAngle';
fdescribe('[FUNCTION] getRotateAngle', () => {
  const rotateAngle = getRotateAngle;

  describe('', () => {
    const arrayLength = 20;
    let arrayOfRandomNumbers;
    let columnsWidthPx: number[];
    let labelsWidthPx: number[];

    beforeEach(() => {
      arrayOfRandomNumbers = () => Array.from({length: arrayLength}, () => Math.floor(Math.random() * 100 ));
      columnsWidthPx = arrayOfRandomNumbers();
      labelsWidthPx = arrayOfRandomNumbers();
    });

    it('should return 0', () => {
      for (let i = 0; i < arrayLength; i++) {
        if (columnsWidthPx[i] >= labelsWidthPx[i]) {
          expect(rotateAngle(columnsWidthPx[i], labelsWidthPx[i])).toEqual(0);
        }
      }
    });

    it('should return value from range [-90, 0]', () => {
      for (let i = 0; i < arrayLength; i++) {
        if (columnsWidthPx[i] < labelsWidthPx[i]) {
          expect(rotateAngle(columnsWidthPx[i], labelsWidthPx[i])).toBeGreaterThan(-90);
          expect(rotateAngle(columnsWidthPx[i], labelsWidthPx[i])).toBeLessThan(0);
        }
      }
    });
  });

  describe('examples', () => {
    it('[100, 105] should return -18', () => {
      expect(rotateAngle(100, 105)).toEqual(-18);
    });

    it('[100, 120] should return -34', () => {
      expect(rotateAngle(100, 120)).toEqual(-34);
    });

    it('[100, 150] should return -48', () => {
      expect(rotateAngle(100, 150)).toEqual(-48);
    });

    it('[100, 200] should return -60', () => {
      expect(rotateAngle(100, 200)).toEqual(-60);
    });

    it('[100, 300] should return -71', () => {
      expect(rotateAngle(100, 300)).toEqual(-71);
    });

    it('[100, 400] should return -76', () => {
      expect(rotateAngle(100, 400)).toEqual(-76);
    });

    it('[100, 500] should return -78', () => {
      expect(rotateAngle(100, 500)).toEqual(-78);
    });

    it('[100, 12000] should return -90', () => {
      expect(rotateAngle(100, 12000)).toEqual(-90);
    });
  });
});
