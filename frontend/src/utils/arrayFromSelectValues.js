const arrayFromSelectValues = (array) => {
  return array.map((item) => ({ value: item.name, label: item.name }));
};
export default arrayFromSelectValues;
