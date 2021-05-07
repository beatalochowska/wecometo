import { useEffect, useState } from "react";
import CardsSet from "../common/cardsSet/CardsSet";
import styles from "./HomePage.module.scss";
import { getRandomRate, getCurrentElement } from "./helpers";

import features from "../../tools/features.json";
import { SingleFeature } from "../../tools/featureInterface";
import numbers from "../../tools/numbers.json";
import { SigleNumber } from "../../tools/numberInterface";

export default function HomePage(): JSX.Element {
  const [featuresList, setFeaturesList] = useState<SingleFeature[]>([
    ...features,
  ]);
  const [numbersList, setNumbersList] = useState<SigleNumber[]>([...numbers]);
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [randList, setRandList] = useState([]);

  const [currentCardValues, setCurrentCardValues] = useState<
    (SigleNumber & SingleFeature)[]
  >([]);

  const getRandomisedList = (arr: any[]): any[] => {
    return arr.sort(() => getRandomRate(arr));
  };

  const getListOFNumbersFeaturesWithSortedIds = (
    randomisedFeatures: SingleFeature[],
    randomisedNumbers: SigleNumber[]
  ): (SigleNumber & SingleFeature)[] => {
    const featuresAndNumbersList = randomisedNumbers.map(
      (el: SigleNumber, i: number) =>
        Object.assign({}, el, randomisedFeatures[i], { id: i })
    );

    return featuresAndNumbersList;
  };

  const setCurrentCardsSet = (
    cardsAmount: number,
    cardsList: (SigleNumber & SingleFeature)[]
  ): (SigleNumber & SingleFeature)[] => {
    const currentCards = [];
    let index = currentCardIndex;
    for (let i = index; i < index + cardsAmount; i++) {
      currentCards.push(cardsList[i]);
    }
    index += cardsAmount;
    setCurrentCardIndex(index);

    console.log(currentCards);
    console.log(currentCardIndex);

    return currentCards;
  };
  const randomisedFeaturesList = getRandomisedList(featuresList);
  const randomisedNumbersList = getRandomisedList(numbersList);

  const randomisedList = getListOFNumbersFeaturesWithSortedIds(
    randomisedFeaturesList,
    randomisedNumbersList
  );

  useEffect((): void => {
    console.log(randomisedList);
    setCurrentCardValues(setCurrentCardsSet(3, randomisedList));
  }, []);

  const handleNextClick = (): void => {
    console.log(randomisedList);
    setCurrentCardValues(setCurrentCardsSet(3, randomisedList));
  };

  return (
    <section className={styles.homePage}>
      <h1 className={styles.title}>Welcome to my street</h1>
      <CardsSet currentCards={currentCardValues} />
      <button className={styles.button} onClick={handleNextClick}>
        NEXT
      </button>
    </section>
  );
}
