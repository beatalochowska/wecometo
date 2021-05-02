import styles from "../Card.module.scss";
import * as feature from "../../../../constants/features";

interface FeatureCardProps {
  title: string;
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
export default function FeatureCard(props: FeatureCardProps): JSX.Element {
  console.log(props.title);

  return (
    <div className={createCardStyle(props.title, styles.card)}>
      <h2 className={styles.cardContent}>{props.title}</h2>
    </div>
  );
}
