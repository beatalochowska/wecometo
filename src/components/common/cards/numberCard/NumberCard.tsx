import styles from "../Card.module.scss";

export default function NumberCard(props: { title: number }): JSX.Element {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardContent}>{props.title}</h2>
    </div>
  );
}
