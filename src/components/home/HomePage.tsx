import React from "react";
import ActionsSet from "./actionsSet/ActionsSet";
import styles from "./HomePage.module.scss";
import NumbersSet from "./numbersSet/NumbersSet";

export default function HomePage(): JSX.Element {
  return (
    <>
      <h1 className={styles.title}>Welcome to my street</h1>
      <NumbersSet />
      <ActionsSet />
    </>
  );
}
