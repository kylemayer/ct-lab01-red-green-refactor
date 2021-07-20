const copyAndPush = (data, endNumber) => {
  const newArr = [...data];
  const copyArr = newArr.push(endNumber);
  return copyArr !== data && newArr;
};

export default copyAndPush;
