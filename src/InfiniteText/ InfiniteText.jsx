"use client";

import { motion } from "framer-motion";
import styles from "./InfiniteText.module.scss";

export default function InfiniteTextScroll() {
  const textItems = [
    "Lightning-fast websites",
    "Full-stack development",
    "SEO-friendly architecture",
    "Responsive design for all devices",
    "Optimized performance & speed",
    "Custom features to fit your needs",
  ];

  return (
    <div className={styles.infinite}>
      <motion.div
        className={styles["infinite__animate"]}
        animate={{ x: ["0%", "-50%"] }} // ← только на полширины
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: "linear",
        }}
      >
        {[...textItems, ...textItems].map((item, index) => (
          <span key={index} className={styles["infinite__text"]}>
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
