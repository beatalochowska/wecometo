import { useEffect, useState } from "react";
import CardsSet from "../common/cardsSet/CardsSet";
import styles from "./HomePage.module.scss";
import { features, getRandomElement, numbers } from "../../tools/data";

export default function HomePage(): JSX.Element {
  const [featuresList, setFeaturesList] = useState<string[]>([...features]);
  const [currentFeatures, setCurrentFeatures] = useState<string[]>([""]);
  const [numbersList, setNumbersList] = useState<number[]>([...numbers]);
  const [currentNumbers, setCurrentNumbers] = useState<number[]>([]);

  useEffect(() => {
    setCurrentFeatures([
      getRandomElement(featuresList, setFeaturesList),
      getRandomElement(featuresList, setFeaturesList),
      getRandomElement(featuresList, setFeaturesList),
    ]);
    setCurrentNumbers([
      getRandomElement(numbersList, setNumbersList),
      getRandomElement(numbersList, setNumbersList),
      getRandomElement(numbersList, setNumbersList),
    ]);
  }, []);

  const handleNextClick = () => {
    console.log(numbersList);
    setCurrentFeatures([
      getRandomElement(featuresList, setFeaturesList),
      getRandomElement(featuresList, setFeaturesList),
      getRandomElement(featuresList, setFeaturesList),
    ]);
    setCurrentNumbers([
      getRandomElement(numbersList, setNumbersList),
      getRandomElement(numbersList, setNumbersList),
      getRandomElement(numbersList, setNumbersList),
    ]);

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
