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

    <PlasmaBallCanvas />

    </section>
  );
};
