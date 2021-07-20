import getName from './get-name';

describe('getName', () => {
  it('returns the name property of the object', async () => {

    const spot = { name: 'spot', age: 5, weight: '20 lbs' };
    const expected = 'spot';
    const actual = getName(spot);

    expect(actual).toEqual(expected);
  });
});
