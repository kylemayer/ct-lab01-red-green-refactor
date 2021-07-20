describe('copyAndPush', () => {
  it('returns a new array with all of the items in the original array and a new item pushed to the end', async () => {
    const numbers = [1, 2, 3];
    const expected = [1, 2, 3, 4];
    const actual = copyAndPush (numbers, 4);

    expect(actual).toEqual(expected);
  });
});
