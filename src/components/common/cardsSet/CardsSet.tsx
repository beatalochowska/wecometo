import styles from "./CardsSet.module.scss";
import { SigleNumber } from "../../../tools/numberInterface";
import { SingleFeature } from "../../../tools/featureInterface";
import SingleCard from "../singleCard/SingleCard";

interface CardSetProps {
  numbers: SigleNumber[];
  features: SingleFeature[];
}

interface SingleCard {
  name: string;
  number: number;
  id: number;
}

export default function CardsSet(props: CardSetProps): JSX.Element {
  const singleCard = props.numbers.map((el: SigleNumber, i: number) =>
    Object.assign({}, el, props.features[i])
  );

  return (
    <section className={styles.cardsSet}>
      {singleCard.map((el: SingleCard) => (
        <SingleCard name={el.name} number={el.number} key={el.id} />
      ))}
    </section>
  );
}
