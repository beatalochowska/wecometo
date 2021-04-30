import styles from "../Card.module.scss";

export default function FeatureCard(props: { title: string }): JSX.Element {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardContent}>{props.title}</h2>
    </div>
  );
}
