import { motion } from "framer-motion";
import styles from "./MainSection.module.scss";
import { Lightning } from "@/Lightning/Lightning";
import React, {useEffect, useRef, useState} from "react";
import Header from "@/Header/Header";



export const MainSection = () => {
     const maskRef = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {

    requestAnimationFrame(() => setOpen(true));
  }, []);
   useEffect(() => {
    if (open && maskRef.current) {
          const el = maskRef.current;
          el.style.height = el.scrollHeight + "px";
        const onTransitionEnd = () => {
        el.style.height = "auto";
        el.removeEventListener("transitionend", onTransitionEnd);
      };

      el.addEventListener("transitionend", onTransitionEnd);
    }
  }, [open]);
  return (
      <section className={styles.main}>
          <Header/>
          <span className={styles.main__line}></span>

          <div ref={maskRef} className={`${styles.main__mask} ${open ? styles["main__mask--open"] : ""}`}>

              {/* Kharchenko */}

              <h1 className={styles["main__text--title"]}>Kharchenko</h1>

              <div className="bg-red-500 text-white p-4">
                  Тест Tailwind
              </div>
              {/* Ivan + подзаголовок */}
              <div className={styles["main__subtext"]}>

                  <h1
                      className={styles["main__text--title"]}

                  >
                      Ivan
                  </h1>

                  <div className={styles["main__subtext--subtitle"]}>

                      <p>Frontend Engineer</p>
                      <span>JavaScript, Next</span>
                  </div>
              </div>
          </div>


          <a href="/cv/Kharchenko_CV_2025.pdf" target="_blank" rel="noopener noreferrer" className={styles.main__btn}>
              my cv
          </a>

          <Lightning/>
      </section>
  );
};
