import { SingleFeature } from "../../tools/featureInterface";
import { SigleNumber } from "../../tools/numberInterface";

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
