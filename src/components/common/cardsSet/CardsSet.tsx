import FeatureCard from "../cards/featureCard/FeatureCard";
import NumberCard from "../cards/numberCard/NumberCard";
import styles from "./CardsSet.module.scss";

interface CardSetProps {
  data: string[] | number[];
}

export default function CardsSet(props: CardSetProps): JSX.Element {
  return (
    <section className={styles.cardsSet}>
      {props.data.map((el: string | number) =>
        typeof el === "string" ? (
          <FeatureCard title={el} key={Math.random()} />
        ) : (
          <NumberCard title={el} key={Math.random()} />
        )
      )}
    </section>
  );
}
