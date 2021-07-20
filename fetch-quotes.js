import fetch from 'node-fetch';

const fetchQuotes = async () => {
  const data = await fetch ('http://futuramaapi.herokuapp.com/api/characters/fry');
  const quote = await data.json();
  return {
    name: quote[0].character,
    text: quote[0].quote,
    image: quote[0].image,
  };
};

export default fetchQuotes;
