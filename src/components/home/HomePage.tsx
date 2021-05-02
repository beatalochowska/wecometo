import { useEffect, useState } from "react";
import CardsSet from "../common/cardsSet/CardsSet";
import styles from "./HomePage.module.scss";
import {
  features,
  numbers,
  getRandomIndex,
  getCurrentElement,
  getArrayWithDeletedCurrentElement,
} from "../../tools/data";

export default function HomePage(): JSX.Element {
  const [featuresList, setFeaturesList] = useState<string[]>([...features]);
  const [currentFeatures, setCurrentFeatures] = useState<string[]>([]);
  const [numbersList, setNumbersList] = useState<number[]>([...numbers]);
  const [currentNumbers, setCurrentNumbers] = useState<number[]>([]);

  const setCurrentFeatureCard = () => {
    const randomIndex = getRandomIndex(featuresList);
    const currentElement = getCurrentElement(featuresList, randomIndex);
    setFeaturesList(
      getArrayWithDeletedCurrentElement(featuresList, randomIndex)
    );

    return currentElement;
  };

  const setCurrentNumberCard = () => {
    const randomIndex = getRandomIndex(numbersList);
    const currentElement = getCurrentElement(numbersList, randomIndex);
    setNumbersList(getArrayWithDeletedCurrentElement(numbersList, randomIndex));

    return currentElement;
  };

  const setCurrentFeatureCardSet = () => {
    setCurrentFeatures([
      setCurrentFeatureCard(),
      setCurrentFeatureCard(),
      setCurrentFeatureCard(),
    ]);
  };

  const setCurrentNumberCardSet = () => {
    setCurrentNumbers([
      setCurrentNumberCard(),
      setCurrentNumberCard(),
      setCurrentNumberCard(),
    ]);
  };

  useEffect(() => {
    setCurrentFeatureCardSet();
    setCurrentNumberCardSet();
  }, []);

  const handleNextClick = () => {
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
      <CardsSet data={currentNumbers} />
      <CardsSet data={currentFeatures} />
      <button className={styles.button} onClick={handleNextClick}>
        NEXT
      </button>
    </section>
  );
}
