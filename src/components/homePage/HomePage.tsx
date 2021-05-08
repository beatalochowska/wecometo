import { useEffect, useState } from "react";
import CardsSet from "../common/cardsSet/CardsSet";
import styles from "./HomePage.module.scss";
import {
  getRandomisedList,
  getListOFNumbersFeaturesWithSortedIds,
} from "./helpers";

import features from "../../tools/features.json";
import { SingleFeature } from "../../tools/featureInterface";
import numbers from "../../tools/numbers.json";
import { SigleNumber } from "../../tools/numberInterface";
import { CARDS_AMOUNT } from "../../constants/cardsAmount";

const randomisedFeaturesList = getRandomisedList([...features]);
const randomisedNumbersList = getRandomisedList([...numbers]);

export default function HomePage(): JSX.Element {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);

  const [currentCardValues, setCurrentCardValues] = useState<
    (SigleNumber & SingleFeature)[]
  >([]);

  const setCurrentCardsSet = (
    cardsList: (SigleNumber & SingleFeature)[]
  ): (SigleNumber & SingleFeature)[] => {
    const currentCards = [];
    let index = currentCardIndex;
    for (let i = index; i < index + CARDS_AMOUNT; i++) {
      currentCards.push(cardsList[i]);
    }
    index += CARDS_AMOUNT;
    setCurrentCardIndex(index);

    return currentCards;
  };

  const randomisedList = getListOFNumbersFeaturesWithSortedIds(
    randomisedFeaturesList,
    randomisedNumbersList
  );

  useEffect((): void => {
    setCurrentCardValues(setCurrentCardsSet(randomisedList));
  }, []);

  const handleNextClick = (): void => {
    setCurrentCardValues(setCurrentCardsSet(randomisedList));
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
