const capitalizeAndFilter = (arr) => {
  const newArr = [];
  for (let index = 0; index < arr.length; index++) {
    const firstChar = arr[index].charAt(0);
    if (firstChar.toUpperCase() !== 'F') {
      const word = arr[index].toUpperCase;
      newArr.push(word);
    }
  }
};

export default capitalizeAndFilter;

