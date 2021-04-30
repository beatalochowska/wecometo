import { useEffect, useState } from "react";
import CardsSet from "../common/cardsSet/CardsSet";
import styles from "./HomePage.module.scss";
import {
  features,
  numbers,
  getRandomIndex,
  getRandomElement,
  getDecrementedArray,
} from "../../tools/data";

export default function HomePage(): JSX.Element {
  const [featuresList, setFeaturesList] = useState<string[]>([...features]);
  const [currentFeatures, setCurrentFeatures] = useState<string[]>([]);
  const [numbersList, setNumbersList] = useState<number[]>([...numbers]);
  const [currentNumbers, setCurrentNumbers] = useState<number[]>([]);

  const setCurrentFeatureCard = () => {
    const randomIndex = getRandomIndex(featuresList);
    const randomElement = getRandomElement(featuresList, randomIndex);
    setFeaturesList(getDecrementedArray(featuresList, randomIndex));

    return randomElement;
  };

  const setCurrentNumbereCard = () => {
    const randomIndex = getRandomIndex(numbersList);
    const randomElement = getRandomElement(numbersList, randomIndex);
    setNumbersList(getDecrementedArray(numbersList, randomIndex));

    return randomElement;
  };

  const setCurrentFeatureCardSet = () => {
    setCurrentFeatures([
      setCurrentFeatureCard(),
      setCurrentFeatureCard(),
      setCurrentFeatureCard(),
    ]);
  };

  const setCurrentNumbereCardSet = () => {
    setCurrentNumbers([
      setCurrentNumbereCard(),
      setCurrentNumbereCard(),
      setCurrentNumbereCard(),
    ]);
  };

  useEffect(() => {
    setCurrentFeatureCardSet();
    setCurrentNumbereCardSet();
  }, []);

  const handleNextClick = () => {
    setCurrentFeatureCardSet();
    setCurrentNumbereCardSet();

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
