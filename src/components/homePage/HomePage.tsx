import { useState } from "react";
import CardsSet from "./cardsSet/CardsSet";
import styles from "./HomePage.module.scss";
import {
  getListOFNumbersFeaturesWithSortedIds,
  getRandomisedList,
} from "./helpers";

import features from "../../tools/features.json";
import numbers from "../../tools/numbers.json";
import { CURRENT_CARDS_AMOUNT } from "../../constants/cardsAmount";
import UserSeedInput from "./userSeedInput/UserSeedInput";

export interface Card {
  number: number;
  name: string;
  id: number;
}

export default function HomePage(): JSX.Element {
  const [currentCardIndex, setCurrentCardIndex] = useState<number>(0);
  const [currentCardsValues, setCurrentCardsValues] = useState<Card[]>([]);
  const [userSeed, setUserSeed] = useState<string>("");
  const [shouldShowCards, setShouldRandomiseCards] = useState<boolean>(false);
  const [randomisedList, setRandomisedList] = useState<Card[]>([]);

  const setCurrentCardsSet = (cardsList: Card[]): Card[] => {
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

  const handleChangeUserSeed = (event: any): void => {
    setUserSeed(event.target.value);
  };

  const handleSeedSubmit = (event: any): void => {
    event.preventDefault();
    setShouldRandomiseCards(true);
    const newRandomisedList = getListOFNumbersFeaturesWithSortedIds(
      getRandomisedList([...features], userSeed),
      getRandomisedList([...numbers], userSeed)
    );

    setCurrentCardsValues(setCurrentCardsSet(newRandomisedList));
  };

  const handleNextClick = (): void => {
    setCurrentCardsValues(setCurrentCardsSet(randomisedList));
  };

  return (
    <section className={styles.homePage}>
      <h1 className={styles.title}>Welcome to my street</h1>
      <UserSeedInput
        onSubmit={handleSeedSubmit}
        userInput={userSeed}
        onUserInputChange={handleChangeUserSeed}
      />

      {shouldShowCards && (
        <>
          <CardsSet currentCards={currentCardsValues} />
          <button className={styles.button} onClick={handleNextClick}>
            NEXT
          </button>
        </>
      )}
    </section>
  );
}
