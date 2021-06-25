import { SingleFeature } from "../../tools/featureInterface";
import { SingleNumber } from "../../tools/numberInterface";
import Chance from "chance";

export const getListOFNumbersFeaturesWithSortedIds = (
  randomisedFeatures: SingleFeature[],
  randomisedNumbers: SingleNumber[]
): (SingleNumber & SingleFeature)[] => {
  const featuresAndNumbersList = randomisedNumbers.map(
    (el: SingleNumber, i: number) =>
      Object.assign({}, el, randomisedFeatures[i], { id: i })
  );

  return featuresAndNumbersList;
};

export const getRandomisedList = <T = unknown>(
  arr: T[],
  userSeed: string
): T[] => {
  const randomRate = new Chance(userSeed);

  return randomRate.shuffle(arr);
};
