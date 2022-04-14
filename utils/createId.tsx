const createId = (uniqueNumber: string, description: string): string => {
  const shortKebabDescription: string = description
    .toLowerCase()
    .split(" ")
    .splice(0, 2)
    .join("-");
  return `${uniqueNumber}-${shortKebabDescription}`;
};

export default createId;
