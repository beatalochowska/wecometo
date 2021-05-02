import { useEffect, useState } from "react";
import CardsSet from "../common/cardsSet/CardsSet";
import styles from "./HomePage.module.scss";
import {
  getRandomIndex,
  getCurrentElement,
  getArrayWithDeletedCurrentElement,
} from "./helpers";

import features from "../../tools/features.json";
import { SingleFeature } from "../../tools/featureInterface";
import numbers from "../../tools/numbers.json";
import { SigleNumber } from "../../tools/numberInterface";

export default function HomePage(): JSX.Element {
  const [featuresList, setFeaturesList] = useState<SingleFeature[]>([
    ...features,
  ]);
  const [currentFeatures, setCurrentFeatures] = useState<SingleFeature[]>([]);
  const [numbersList, setNumbersList] = useState<SigleNumber[]>([...numbers]);
  const [currentNumbers, setCurrentNumbers] = useState<SigleNumber[]>([]);

  const setCurrentFeatureCard = (): SingleFeature => {
    const randomIndex = getRandomIndex(featuresList);
    const currentElement = getCurrentElement(featuresList, randomIndex);
    setFeaturesList(
      getArrayWithDeletedCurrentElement(featuresList, randomIndex)
    );

    return currentElement;
  };

  const setCurrentNumberCard = (): SigleNumber => {
    const randomIndex = getRandomIndex(numbersList);
    const currentElement = getCurrentElement(numbersList, randomIndex);
    setNumbersList(getArrayWithDeletedCurrentElement(numbersList, randomIndex));

    return currentElement;
  };

  const setCurrentFeatureCardSet = (): void => {
    setCurrentFeatures([
      setCurrentFeatureCard(),
      setCurrentFeatureCard(),
      setCurrentFeatureCard(),
    ]);
  };

  const setCurrentNumberCardSet = (): void => {
    setCurrentNumbers([
      setCurrentNumberCard(),
      setCurrentNumberCard(),
      setCurrentNumberCard(),
    ]);
  };

  useEffect((): void => {
    setCurrentFeatureCardSet();
    setCurrentNumberCardSet();
  }, []);

  const handleNextClick = (): void => {
    setCurrentFeatureCardSet();
    setCurrentNumberCardSet();

    if (featuresList.length === 0) {
      setFeaturesList([...features]);
    }

    if (numbersList.length === 0) {
      setNumbersList([...numbers]);
    }
  };

  return (
    <section className={styles.homePage}>
      <h1 className={styles.title}>Welcome to my street</h1>
      <CardsSet numbers={currentNumbers} features={currentFeatures} />
      <button className={styles.button} onClick={handleNextClick}>
        NEXT
      </button>
    </section>
  );
}
