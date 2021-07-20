const capitalizeAndFilter = (arr) => {
  const capitalizedArr = arr.map(str => capitalizedStr(str));
  const filteredArr = filter(capitalizedArr);
  return filteredArr;
};

const capitalizedStr = (string) => string.toUpperCase();

const filter = (arr) => {
  const newArr = [];
  arr.map(string => {
    if(string[0] != 'F') {
      newArr.push(string);
    }
    return newArr;
  });
};

export default capitalizeAndFilter;

