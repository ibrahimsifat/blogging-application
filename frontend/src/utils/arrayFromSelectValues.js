export const arrayFromSelectValues = (array) => {
  return array?.map((item) => ({ value: item.name, label: item.name }));
};
export const arrayFromValues = (array) => {
  return array?.map((item) => ({ value: item, label: item }));
};
