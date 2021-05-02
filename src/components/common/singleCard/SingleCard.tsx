import styles from "./SingleCard.module.scss";
import * as feature from "../../../constants/features";

interface SingleCardProps {
  name: string;
  number: number;
}

const createCardStyle = (name: string, elementStyle: string): string => {
  const style = elementStyle;
  switch (name) {
    case feature.STOCK:
      return `${style} ${styles.stock}`;
    case feature.WORK:
      return `${style} ${styles.work}`;
    case feature.FENCE:
      return `${style} ${styles.fence}`;
    case feature.PARK:
      return `${style} ${styles.park}`;
    case feature.POOL:
      return `${style} ${styles.pool}`;
    case feature.BIS:
      return `${style} ${styles.bis}`;
    default:
      return style;
  }
};
export default function SingleCard(props: SingleCardProps): JSX.Element {
  return (
    <div className={createCardStyle(props.name, styles.card)}>
      <div className={styles.cardContent}>
        <h2 className={styles.cardText}>{props.number}</h2>
        <h3 className={styles.cardText}>{props.name}</h3>
      </div>
    </div>
  );
}
