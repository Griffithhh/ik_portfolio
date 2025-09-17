// TechnoItem.jsx
import { useRef, useEffect, useState } from "react";
import styles from "./TechnoItem.module.scss";

export const TechnoItem = ({ tech }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  // При первом появлении этого tech — ставим open = true
  useEffect(() => {
    setTimeout(()=>{    setOpen(true);}, [100])

  }, [tech]);

  // Высота анимации
  useEffect(() => {
    if (open && ref.current) {
      const el = ref.current;
      el.style.height = el.scrollHeight + "px";
      const onEnd = () => {
        el.style.height = "auto";
        el.removeEventListener("transitionend", onEnd);
      };
      el.addEventListener("transitionend", onEnd);
    }
    console.log(open)
  }, [open]);

  return (
    <div
      ref={ref}
      className={`${styles.technoitem} ${
        open ? styles["technoitem--open"] : ""
      }`}
    >
      <span>{tech}</span>
    </div>
  );
};
