export const isEmpty = item => {
  if (item === null || item === undefined) {
    return true;
  }
  switch (typeof item) {
    case "string":
      return item === "";
    case "number":
      return isNaN(item);
    case "object":
      return Object.keys(item).length === 0;
    default:
      return true;
  }
};

export const oneIsNotEmpty = (...rest) => {
  return rest.some(item => !isEmpty(item));
};
