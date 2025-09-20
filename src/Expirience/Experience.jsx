import { motion } from "framer-motion";
import styles from "./Experience.module.scss";

// Общие варианты анимации
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // задержка между детьми
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export const Experience = () => {
  return (
      <section id="experience" className={styles.experience}>


          <div className={styles["experience__container2"]}>
<motion.div
              className={styles["experience__container--title"]}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{amount: 0.3}}
          >
            <motion.h1 variants={itemVariants}>
              Things I've Worked on, Some of Them
            </motion.h1>
            <motion.div
                className={styles["experience__container--line"]}
                variants={itemVariants}
            >
              <span></span>
            </motion.div>
          </motion.div>


              <div className={styles["experience__container2__info"]}>
                  <div className={styles["experience__container2__previewdesk"]}>
                      <img src="/img/igaming.png" alt=""/>
                  </div>
                  {/* Блок с проектом (по очереди) */}
                  <motion.div
                      className={styles["experience__container2__project"]}
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{amount: 0.3}}
                  >
                      <motion.p variants={itemVariants}>Igaming company</motion.p>
                      <motion.h1 variants={itemVariants}>Frontend developer at Growe</motion.h1>
                      <motion.div
                          className={styles["experience__container2__project__description"]}
                          variants={itemVariants}
                      >
                          I worked as part of a large development team together with a QA engineer, tech lead, and
                          project manager.
                          We collaborated in sprint-based workflows using Jira to support and build new
                          applications.
                          Our focus was on leveraging the latest technologies, primarily Next.js, to deliver modern,
                          scalable solutions.
                          <div className={styles["experience__container2__project__description--previewmob"]}>
                              <img src="/img/igaming.png" alt=""/>
                          </div>
                      </motion.div>
                      <motion.div
                          className={styles["experience__container2__project--stack"]}
                          variants={itemVariants}
                      >
                          <span> Next.js | JS/TS | Pixi.js/ | Test groups | Rest API</span>
                          <a href="https://growe.com/">VIEW DETAILS</a>
                      </motion.div>
                  </motion.div>

                  {/* Картинка (без анимации) */}

              </div>
          </div>

      </section>
  );
};