import styles from "../Card.module.scss";

interface FeatureCardProps {
  title: string;
}
export default function FeatureCard(props: FeatureCardProps): JSX.Element {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardContent}>{props.title}</h2>
    </div>
  );
}
