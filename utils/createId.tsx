const createId = (uniqueNumber, description) => {
  const shortKebabDescription = description
    .toLowerCase()
    .split(" ")
    .splice(0, 2)
    .join("-");
  return `${uniqueNumber}-${shortKebabDescription}`;
};

export default createId;
