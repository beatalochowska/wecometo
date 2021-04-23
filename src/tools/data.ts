import * as constants from "../constants/constants";

export const exnumbers = [1, 2, 3];

const numbers_groups = [
  [1, 2, 14, 15],
  [3, 13],
  [4, 12],
  [5, 11],
  [6, 10],
  [7, 9],
  [8],
];

const features_proportion = [
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
  let counter = constants.NUMBERS_PROPORTION_TAG;
  for (let i = 0; i < numbers_groups.length; i++) {
    for (let j = 0; j < counter; j++) {
      allNumbers.push(...numbers_groups[i]);
    }
    counter++;
  }

  return allNumbers;
};

export const numbers = generateNumbers();

const generateFeatures = (): string[] => {
  const allFeatures: string[] = [];
  for (let i = 0; i < constants.FEATURES_PROPORTION_TAG; i++) {
    allFeatures.push(...features_proportion);
  }

  return allFeatures;
};

export const features = generateFeatures();

// const getRandomElement = (
//   remainingFeatures: any[],
//   setStateFunction: React.Dispatch<React.SetStateAction<any[]>>
// ) => {
//   const randomIndex = Math.floor(Math.random() * remainingFeatures.length);
//   const item = remainingFeatures[randomIndex];
//   remainingFeatures.splice(randomIndex, 1);
//   setStateFunction(remainingFeatures);

//   return item;
// };

export const getRandomElement = <T>(
  arr: T[],
  callback: (arr: T[]) => void
): T => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  arr.splice(randomIndex, 1);
  callback(arr);

  return item;
};
