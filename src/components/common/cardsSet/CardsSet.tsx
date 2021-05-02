import styles from "./CardsSet.module.scss";
import { SigleNumber } from "../../../tools/numberInterface";
import { SingleFeature } from "../../../tools/featureInterface";
import NumberCard from "../cards/numberCard/NumberCard";
import FeatureCard from "../cards/featureCard/FeatureCard";

interface CardSetProps {
  data: SingleFeature[] | SigleNumber[];
}

export default function CardsSet(props: CardSetProps): JSX.Element {
  return (
    <section className={styles.cardsSet}>
      {props.data.map((el: SingleFeature | SigleNumber) =>
        "name" in el ? (
          <FeatureCard title={el.name} key={el.id} />
        ) : (
          <NumberCard title={el.number} key={el.id} />
        )
      )}
    </section>
  );
}
