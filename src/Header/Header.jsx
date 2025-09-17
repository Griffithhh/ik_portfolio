"use client";
import Link from "next/link";
import styles from "./Header.module.scss";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles["header__logo"]}>
        <h1>
          <span>{"<Dev> "}</span>
          <Typewriter
            options={{
              strings: [`Ivan Kharchenko${"</Dev>"}`],
              autoStart: true,
              loop: true,
              delay: 125,
              deleteSpeed: 50,
            }}
          />
        </h1>
      </div>
      <ul className={styles["header__navigation"]}>
        <li>
          <Link href="#stack">Stack.</Link>
        </li>
        <li>
          <Link href="#experience">Experience.</Link>
        </li>

      </ul>
    </header>
  );
}
