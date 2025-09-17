import styles from "@/Loader/Loader.module.scss";

export const Loader = () => (
  <div className={styles.cLoader}>
    <div className={styles["cLoader__content"]}>
      <div className={`${styles["cLoader__item"]} ${styles.topLeft}`} />
      <div className={`${styles["cLoader__item"]} ${styles.topRight}`} />
      <div className={`${styles["cLoader__item"]} ${styles.bottomLeft}`} />
      <div className={`${styles["cLoader__item"]} ${styles.bottomRight}`} />
    </div>

    {/* "невидимая кнопка" если она нужна для SSR / focus-trap */}
    <button type="button" className={styles.invisible} id="submit-button"></button>
  </div>
);
