import { motion } from "framer-motion";
import {useEffect, useRef, useState} from "react";
import styles from "./Scale.module.scss";
import {TechnoItem} from "@/TechnoItem/TechnoItem";

export const Scale = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragRotate, setDragRotate] = useState(0);
  const [shownList, setShownList] = useState([]); // список показанных
  const ref = useRef(null);


  useEffect(() => {

    if (ref.current) {
      const el = ref.current;
      el.style.height = el.scrollHeight + "px";
      const onEnd = () => {
        el.style.height = "auto";
        el.removeEventListener("transitionend", onEnd);
      };
      el.addEventListener("transitionend", onEnd);
    }
  }, [shownList]); // срабатывает, когда новое слово появляется

  const cards = [
    { src: "/tech/reactjs.png", label: "React" },
    { src: "/tech/next.png", label: "Next.js" },
    { src: "/tech/typescript.png", label: "TypeScript" },
    { src: "/tech/javascript.png", label: "JavaScript" },
  ];
  const total = cards.length;

  const swipe = () => {
    const nextIndex = (activeIndex + 1) % total;

    // Добавляем текущий элемент в список
    if (!shownList.includes(cards[activeIndex].label)) {
      setShownList((prev) => [...prev, cards[activeIndex].label]);
    }

    setActiveIndex(nextIndex);
    setDragRotate(0);
  };

  const getTarget = (index) => {
    const relativePos = (index - activeIndex + total) % total;

    switch (relativePos) {
      case 0:
        return { zIndex: 5, scale: 1, x: 0, y: 0, rotate: dragRotate };
      case 1:
        return { zIndex: 4, scale: 1, x: 20, y: 10, rotate: 5 };
      case 2:
        return { zIndex: 3, scale: 1, x: 40, y: 20, rotate: 10 };
      case 3:
        return { zIndex: 2, scale: 1, x: 60, y: 30, rotate: 15 };
      default:
        return { zIndex: 0, scale: 1, x: 100, y: 50, rotate: 20 };
    }
  };

  const renderCard = (index) => {
    const relativePos = (index - activeIndex + total) % total;
    const target = getTarget(index);

    if (relativePos === 0) {
      return (
        <motion.div

          key={index}
          className={styles.card}
          style={{ position: "absolute" }}
          animate={target}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDrag={(e, info) => {
            if (info.delta.x > 0) {
              setDragRotate(10);
            } else if (info.delta.x < 0) {
              setDragRotate(-10);
            }
          }}
          onDragEnd={(e, info) => {
            setDragRotate(0);
            if (info.offset.x > 150 || info.offset.x < -150) {
              swipe();
            }
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
        >
          <img
            src={cards[index].src}
            alt={`Слайд ${index + 1}`}
            className={styles.image}
          />
        </motion.div>
      );
    }

    return (
      <motion.div
        key={index}
        className={styles.card}
        style={{ position: "absolute" }}
        animate={target}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 20,
        }}
      >
        <img
          src={cards[index].src}
          alt={`Слайд ${index + 1}`}
          className={styles.image}
        />
      </motion.div>
    );
  };

  return (
      <section    id="stack" className={styles.scale}>
        <div className={styles.deck}>{cards.map((_, idx) => renderCard(idx))}</div>

        <div className={styles["scale__technoboard"]}>
          <div className={styles["scale__technoboard--title"]}>
          <h1>My Stack:</h1>
          <span>swipe to read</span>
          </div>
          {shownList.map((tech, i) => (
              <TechnoItem key={i} tech={tech}/>
          ))}
        </div>

      </section>
  );
};
