import React from "react";
import { features } from "../../../tools/data";
import Card from "../card/Card";
import styles from "./CardsSet.module.scss";

interface CardSetProps {
  data: string[] | number[];
}

export default function CardsSet(props: CardSetProps): JSX.Element {
  return (
    <section className={styles.cardsSet}>
      {props.data.map((el: string | number) => (
        <Card title={el} />
      ))}
    </section>
  );
}
