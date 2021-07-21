const capitalizeAndFilter = (arr) => {
  const capArr = arr.map(str => capStr(str));
  const filterArr = filter(capArr);
  return filterArr;
};

const capStr = (string) => string.toUpperCase();

const filter = (array) => {
  const newArr = [];
  array.map(string => {
    if(string[0] != 'F') {
      newArr.push(string);
    }
  });
  return newArr;
};

export default capitalizeAndFilter;

