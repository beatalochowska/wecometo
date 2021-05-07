import seedrandom from "seedrandom";

let seed = "czeko1adaje5tsuper!";

export const getRandomRate = <T>(arr: T[]): number => {
  seed = seed + "6*toff1te7";
  seed = seed.substring(1);
  const randomIndex = seedrandom(seed)() - 0.5;

  return randomIndex;
};

export const getArrayWithDeletedCurrentElement = <T>(
  arr: T[],
  index: number
): void => {
  arr.splice(index, 1);
};

export const getCurrentElement = <T>(arr: T[], index: number): T => {
  const currentElement = arr[index];

  return currentElement;
};
