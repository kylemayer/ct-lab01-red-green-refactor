import fetchQuotes from './fetch-quotes';

describe('fetchQuotes', () => {
  it('returns a single quote from the Futurama Quote API', async () => {
    const expected = {
      name: expect.any(String),
      text: expect.any(String),
      image: expect.any(String)
    };

    expect(await fetchQuotes()).toEqual(expected);
  });
});
