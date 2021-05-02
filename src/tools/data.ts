import * as constants from "../constants/constants";

const numbersGroup = [
  [1, 2, 14, 15],
  [3, 13],
  [4, 12],
  [5, 11],
  [6, 10],
  [7, 9],
  [8],
];

const featuresGroup = [
  "giełda",
  "giełda",
  "płot",
  "płot",
  "park",
  "park",
  "bis",
  "basen",
  "roboty",
];

const generateNumbers = (): number[] => {
  const allNumbers: number[] = [];
  let counter = constants.NUMBERS_MULTIPLY;
  for (let i = 0; i < numbersGroup.length; i++) {
    for (let j = 0; j < counter; j++) {
      allNumbers.push(...numbersGroup[i]);
    }
    counter++;
  }

  return allNumbers;
};

export const numbers = generateNumbers();

const generateFeatures = (): string[] => {
  const allFeatures: string[] = [];
  for (let i = 0; i < constants.FEATURES_MULTIPLY; i++) {
    allFeatures.push(...featuresGroup);
  }

  return allFeatures;
};

export const features = generateFeatures();

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
