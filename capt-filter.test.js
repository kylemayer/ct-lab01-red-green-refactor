import capitalizeAndFilter from './capt-filter';

describe('capitalizeAndFilter', () => {
  it('returns an array of capitalized strings and any strings starting with the letter F/f are filtered out', async () => {
    const arr = ['coffee', 'tadpole', 'fresh', 'floral', 'gear', 'fig'];
    const expected = ['COFFEE', 'TADPOLE', 'GEAR'];
    const actual = capitalizeAndFilter(arr);

    expect(actual).toEqual(expected);
  });
});
