import styles from "../Card.module.scss";
import React from "react";

interface NumberCardProps {
  title: number;
}

export default function NumberCard(props: NumberCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardContent}>{props.title}</h2>
    </div>
  );
}
