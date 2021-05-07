import styles from "./CardsSet.module.scss";
import { SigleNumber } from "../../../tools/numberInterface";
import { SingleFeature } from "../../../tools/featureInterface";
import SingleCard from "../singleCard/SingleCard";

interface CardSetProps {
  currentCards: (SigleNumber & SingleFeature)[];
}

interface SingleCard {
  name: string;
  number: number;
  id: number;
}

export default function CardsSet(props: CardSetProps): JSX.Element {
  return (
    <section className={styles.cardsSet}>
      {props.currentCards.map((el: SigleNumber & SingleFeature) => (
        <SingleCard name={el.name} number={el.number} key={el.id} />
      ))}
    </section>
  );
}
