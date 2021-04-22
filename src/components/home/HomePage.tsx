import { useEffect, useState } from "react";
import CardsSet from "../common/cardsSet/CardsSet";
import styles from "./HomePage.module.scss";
import { exnumbers, features } from "../../tools/data";

export default function HomePage(): JSX.Element {
  const [featuresList, setFeaturesList] = useState([...features]);
  const [currentFeatures, setCurrentFeatures] = useState([""]);

  const getRandomFeature = (remainingFeatures: string[]) => {
    const randomIndex = Math.floor(Math.random() * remainingFeatures.length);
    const item = remainingFeatures[randomIndex];
    remainingFeatures.splice(randomIndex, 1);
    setFeaturesList(remainingFeatures);

    return item;
  };

  useEffect(() => {
    setCurrentFeatures([
      getRandomFeature(featuresList),
      getRandomFeature(featuresList),
      getRandomFeature(featuresList),
    ]);
  }, []);

  useEffect(() => {
    console.log(featuresList);
    console.log(features);
    if (featuresList.length === 0) {
      setFeaturesList([...features]);
    }
  }, [currentFeatures]);

  const handleNextClick = () => {
    // console.log(featuresList);
    // if (featuresList.length === 0) { wytłumacz dlaczego to szajstwo nie zadziałało
    //   console.log(baseFeatures);
    //   setFeaturesList(baseFeatures);
    // }
    setCurrentFeatures([
      getRandomFeature(featuresList),
      getRandomFeature(featuresList),
      getRandomFeature(featuresList),
    ]);
  };

  return (
    <section className={styles.homePage}>
      <h1 className={styles.title}>Welcome to my street</h1>
      <CardsSet data={exnumbers} />
      <CardsSet data={currentFeatures} />
      <button className={styles.button} onClick={handleNextClick}>
        NEXT
      </button>
    </section>
  );
}
