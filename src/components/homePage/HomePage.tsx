import { useState } from "react";
import CardsSet from "../common/cardsSet/CardsSet";
import styles from "./HomePage.module.scss";
import {
  getListOFNumbersFeaturesWithSortedIds,
  getRandomisedList,
} from "./helpers";

import features from "../../tools/features.json";
import { SingleFeature } from "../../tools/featureInterface";
import numbers from "../../tools/numbers.json";
import { SingleNumber } from "../../tools/numberInterface";
import { CURRENT_CARDS_AMOUNT } from "../../constants/cardsAmount";

export default function HomePage(): JSX.Element {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [currentCardValues, setCurrentCardValues] = useState<
    (SingleNumber & SingleFeature)[]
  >([]);
  const [userSeed, setUserSeed] = useState<string>("");
  const [shouldShowCards, setShouldRandomiseCards] = useState<boolean>(false);
  const [randomisedList, setRandomisedList] = useState<
    (SingleNumber & SingleFeature)[]
  >(
    getListOFNumbersFeaturesWithSortedIds(
      getRandomisedList([...features], userSeed),
      getRandomisedList([...numbers], userSeed)
    )
  );

  const setCurrentCardsSet = (
    cardsList: (SingleNumber & SingleFeature)[]
  ): (SingleNumber & SingleFeature)[] => {
    const currentCards = [];
    let index = currentCardIndex;
    for (let i = index; i < index + CURRENT_CARDS_AMOUNT; i++) {
      currentCards.push(cardsList[i]);
    }
    index += CURRENT_CARDS_AMOUNT;
    if (index < randomisedList.length) {
      setCurrentCardIndex(index);

      return currentCards;
    }
    setCurrentCardIndex(0);
    setUserSeed(userSeed + "la123");
    setRandomisedList(
      getListOFNumbersFeaturesWithSortedIds(
        getRandomisedList([...features], userSeed),
        getRandomisedList([...numbers], userSeed)
      )
    );

    return currentCards;
  };

  const handleNextClick = (event: any): void => {
    event.preventDefault();
    setCurrentCardValues(setCurrentCardsSet(randomisedList));
  };

  const handleChangeUserSeed = (event: any): void => {
    setUserSeed(event.target.value);
  };

  const handleSeedSubmit = (event: any): void => {
    event.preventDefault();
    setShouldRandomiseCards(true);
    const newCreatedRandomizedListOfCards: (SingleNumber & SingleFeature)[] =
      getListOFNumbersFeaturesWithSortedIds(
        getRandomisedList([...features], userSeed),
        getRandomisedList([...numbers], userSeed)
      );
    setCurrentCardValues(setCurrentCardsSet(newCreatedRandomizedListOfCards));
    setRandomisedList(newCreatedRandomizedListOfCards);
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
