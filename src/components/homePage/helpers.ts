export const getRandomIndex = <T>(arr: T[]): number => {
  const randomIndex = Math.floor(Math.random() * arr.length);

  return randomIndex;
};

export const getArrayWithDeletedCurrentElement = <T>(
  arr: T[],
  index: number
): T[] => {
  arr.splice(index, 1);

  return arr;
};

export const getCurrentElement = <T>(arr: T[], index: number): T => {
  const currentElement = arr[index];

  return currentElement;
};
