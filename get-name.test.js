import getName from './get-name';

describe('getName', () => {
  it('returns the name property of the object', async () => {

    const spot = 'spot';
    const expected = { name: 'spot' };
    const actual = getName(spot);

    expect(actual).toEqual(expected);
  });
});
