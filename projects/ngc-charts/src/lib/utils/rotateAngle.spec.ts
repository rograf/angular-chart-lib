import { getRotateAngle } from './rotateAngle';
describe('getRotateAngle', () => {
  const rotateAngle = getRotateAngle;

  it('should return 0', () => {
    expect(rotateAngle(20, 10)).toEqual(0);
  });

  it('should return 0', () => {
    expect(rotateAngle(50, 20)).toEqual(0);
  });

  it('should return 0', () => {
    expect(rotateAngle(75, 50)).toEqual(0);
  });

  it('should return -45', () => {
    expect(rotateAngle(10, 20)).toEqual(-45);
  });

  it('should return -45', () => {
    expect(rotateAngle(20, 50)).toEqual(-45);
  });

  it('should return -45', () => {
    expect(rotateAngle(50, 75)).toEqual(-45);
  });

});
