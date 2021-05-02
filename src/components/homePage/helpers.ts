import seedrandom from "seedrandom";

let seed = "czeko1adaje5tsuper!";
export const getRandomIndex = <T>(arr: T[]): number => {
  seed = seed + "6*toff1te7";
  seed = seed.substring(1);
  const randomIndex = Math.floor(seedrandom(seed)() * arr.length);

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
