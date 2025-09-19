import { motion } from "framer-motion";
import styles from "./Experience.module.scss";

// Общие варианты анимации
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // задержка между детьми
    },
  },
};

const itemVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const Experience = () => {
  return (
      <section id="experience" className={styles.experience}>
        <div className={styles["experience__container"]}>
          {/* Заголовок + линия */}
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

          <div className={styles["experience__container__info"]}>
            {/* Блок с проектом (по очереди) */}
            <motion.div
                className={styles["experience__container__project"]}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{amount: 0.3}}
            >
              <motion.p variants={itemVariants}>Featured Project</motion.p>
              <motion.h1 variants={itemVariants}>X-Dividend Mobile App</motion.h1>
              <motion.div
                  className={styles["experience__container__project--description"]}
                  variants={itemVariants}
              >
                The app offers comprehensive data on companies, including categories
                of Most Actives, Gainers and Losers Stock Market. Users can sort the
                information by sector, name, highest or lowest price, dividend date,
                and ex-dividend date. This data is updated in real-time, ensuring
                that users always have access to the most current information.
              </motion.div>
              <motion.div
                  className={styles["experience__container__project--stack"]}
                  variants={itemVariants}
              >
                <span>React | Mongo/Node | State Management | CRM</span>
                <button>VIEW DETAILS</button>
              </motion.div>
            </motion.div>

            {/* Картинка (без анимации) */}
            <div className={styles["experience__container__preview"]}>
              <img src="/img/doctor.png" alt=""/>
            </div>
          </div>
        </div>
        <div className={styles["experience__container2"]}>


          <div className={styles["experience__container2__info"]}>
            <div className={styles["experience__container2__preview"]}>
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
                  className={styles["experience__container2__project--description"]}
                  variants={itemVariants}
              >
                The app offers comprehensive data on companies, including categories
                of Most Actives, Gainers and Losers Stock Market. Users can sort the
                information by sector, name, highest or lowest price, dividend date,
                and ex-dividend date. This data is updated in real-time, ensuring
                that users always have access to the most current information.
              </motion.div>
              <motion.div
                  className={styles["experience__container2__project--stack"]}
                  variants={itemVariants}
              >
                <span> Next.js | JS/TS | Pixi.js/ | Test groups | Rest API</span>
                <button>VIEW DETAILS</button>
              </motion.div>
            </motion.div>

            {/* Картинка (без анимации) */}

          </div>
        </div>
      </section>
  );
};
