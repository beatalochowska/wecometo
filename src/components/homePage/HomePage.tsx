import { useEffect, useRef, useState } from "react";
import CardsSet from "../common/cardsSet/CardsSet";
import styles from "./HomePage.module.scss";
import { getListOFNumbersFeaturesWithSortedIds } from "./helpers";

import features from "../../tools/features.json";
import { SingleFeature } from "../../tools/featureInterface";
import numbers from "../../tools/numbers.json";
import { SigleNumber } from "../../tools/numberInterface";
import { CARDS_AMOUNT } from "../../constants/cardsAmount";
import Chance from "chance";

const useDidMountEffect = (func: any, deps: any) => {
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      func();
    } else {
      didMount.current = true;
    }
  }, deps);
};

export default function HomePage(): JSX.Element {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [currentCardValues, setCurrentCardValues] = useState<
    (SigleNumber & SingleFeature)[]
  >([]);

  const [userSeed, setUserSeed] = useState<string>("");

  const [shouldShowCards, setShouldRandomiseCards] = useState<boolean>(false);

  const getRandomisedList = (arr: any[], userSeed: string): any[] => {
    const randomRate = new Chance(userSeed);

    return randomRate.shuffle(arr);
  };

  const randomisedFeaturesList = () =>
    getRandomisedList([...features], userSeed);
  const randomisedNumbersList = () => getRandomisedList([...numbers], userSeed);

  const [randomisedList, setRandomisedList] = useState<
    (SigleNumber & SingleFeature)[]
  >(
    getListOFNumbersFeaturesWithSortedIds(
      randomisedFeaturesList(),
      randomisedNumbersList()
    )
  );

  const allCardsAmount = randomisedList.length;

  const setCurrentCardsSet = (
    cardsList: (SigleNumber & SingleFeature)[]
  ): (SigleNumber & SingleFeature)[] => {
    const currentCards = [];
    let index = currentCardIndex;
    for (let i = index; i < index + CARDS_AMOUNT; i++) {
      currentCards.push(cardsList[i]);
    }
    index += CARDS_AMOUNT;
    if (index < allCardsAmount) {
      setCurrentCardIndex(index);
    } else {
      setCurrentCardIndex(0);
      setUserSeed(userSeed + "la123");
      setRandomisedList(
        getListOFNumbersFeaturesWithSortedIds(
          randomisedFeaturesList(),
          randomisedNumbersList()
        )
      );
    }

    return currentCards;
  };

  useDidMountEffect(() => {
    setCurrentCardValues(setCurrentCardsSet(randomisedList));
  }, [shouldShowCards]);

  const handleNextClick = (): void => {
    setCurrentCardValues(setCurrentCardsSet(randomisedList));
  };

  const handleChangeUserSeed = (event: any): void => {
    setUserSeed(event.target.value);
  };

  const handleSeedSubmit = (event: any): void => {
    event.preventDefault();

    setRandomisedList(
      getListOFNumbersFeaturesWithSortedIds(
        randomisedFeaturesList(),
        randomisedNumbersList()
      )
    );

    setShouldRandomiseCards(true);
  };

  return (
    <section className={styles.homePage}>
      <h1 className={styles.title}>Welcome to my street</h1>
      <form onSubmit={handleSeedSubmit}>
        <input type="text" value={userSeed} onChange={handleChangeUserSeed} />
        <input type="submit" value="Generuj karty" />
      </form>
      {shouldShowCards && (
        <>
          <CardsSet currentCards={currentCardValues} />
          <button className={styles.button} onClick={handleNextClick}>
            NEXT
          </button>
        </>
      )}
    </section>
  );
}
