import seedrandom from "seedrandom";
import { SingleFeature } from "../../tools/featureInterface";
import { SigleNumber } from "../../tools/numberInterface";

let seed = "czeko1adaje5tsuper!";
export const getRandomRate = (): number => {
  const randomRate = seedrandom(seed)() - 0.5;
  seed = seed + "lala";

  return randomRate;
};

export const getRandomisedList = (arr: any[]): any[] => {
  return arr.sort(() => getRandomRate());
};

export const getListOFNumbersFeaturesWithSortedIds = (
  randomisedFeatures: SingleFeature[],
  randomisedNumbers: SigleNumber[]
): (SigleNumber & SingleFeature)[] => {
  const featuresAndNumbersList = randomisedNumbers.map(
    (el: SigleNumber, i: number) =>
      Object.assign({}, el, randomisedFeatures[i], { id: i })
  );

  return featuresAndNumbersList;
};
