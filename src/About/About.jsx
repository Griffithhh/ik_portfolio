import styles from "./About.module.scss";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import  {PlasmaBallCanvas} from "@/canvasContainer/Ball";

export const About = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  // useInView для появления секции
  const [inViewRef, inView] = useInView({
    threshold: 0.4, // срабатывает, когда 20% блока видно
    triggerOnce: true
  });

  // Объединяем ref секции и inViewRef
  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  // Запуск анимации при появлении секции
  useEffect(() => {
    if (inView) {
      setOpen(true);
    }
  }, [inView]);

  // Динамическая высота для плавного раскрытия
  useEffect(() => {
    if (open && ref.current) {
      const el = ref.current;
      el.style.height = el.scrollHeight + "px";

      const onTransitionEnd = () => {
        el.style.height = "auto";
        el.removeEventListener("transitionend", onTransitionEnd);
      };

      el.addEventListener("transitionend", onTransitionEnd);
    }
  }, [open]);

  return (
    <section className={styles.about}>
      {/* Фон-видео */}


      {/* Блок со скиллами */}
    <PlasmaBallCanvas />

      {/* Контент */}
      <div className={styles["about__wrapper"]}>
        <div
          ref={setRefs}
          className={`${styles["about__mask"]} ${open ? styles["about__mask--open"] : ""}`}
        >
          <h1 className={styles["about__wrapper--title"]}>HELLO, I'M IVAN</h1>

          <div className={styles["about__wrapper--title"]}>
            <p>I use my passion and skills</p>
          </div>

          <div className={styles["about__wrapper--description"]}>
            to build modern web applications and digital experiences.
         National and international clients rely on me for development, implementation, and management of their web products.
       As an independent developer, I collaborate with web agencies, companies, startups, and individuals to create scalable and efficient digital solutions.
       Advisor and technical partner for several digital and fintech startups.
         Also, Judge at CSSDA and The Webby.
          </div>
        </div>
      </div>
    </section>
  );
};
