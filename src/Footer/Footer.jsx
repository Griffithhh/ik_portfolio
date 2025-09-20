
import styles from "./Footer.module.scss";





export const Footer = () => {

  return (
      <footer className={styles.footer}>
          <div className={styles["footer__container"]}>
              <p className={styles["footer__container--text"]}>
                  © 2025 Ivan Kharchenko. Built with React.
              </p>
          </div>
      </footer>
  );
};
