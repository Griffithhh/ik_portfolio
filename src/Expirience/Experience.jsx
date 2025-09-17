import styles from "./Experience.module.scss";

const experiences = [
  {
    title: "Commercial Experience",
    duration: "March 2024 - May 2025",
    description:(<span>Customer: <b> Growe</b> | Domain: Finance, iGaming</span>),
    teamSize: "6 Developers, 1 Team Lead, 1 QA",
    tasks: [
      "Designed and maintained responsive websites with React and Next.js, ensuring stable performance and seamless cross-device support.",
      "Resolved front-end issues through careful analysis, debugging, and deployment of solutions that improved reliability and user interaction.",

    ],
    technologies: "State management, JavaScript/TypeScript, Next.js,"
  },
  {
    title: "Sendi – Full-Stack Messenger",
    duration: "2 months",
    description: "Self-learning project focused on real-time messaging",
    teamSize: "Solo project",
    tasks: [
      "Developed a secure full-stack messenger with registration, login, and JWT authentication, ensuring stable protection of user accounts.",
      "Implemented real-time chat updates with Socket.IO, providing instant delivery of messages and continuous synchronization across devices.",

    ],
    technologies: "React, Node.js,Socket.IO"
  },
];

export const Experience = () => {
  return (
      <section id="experience" className={styles.experience}>
         <div className={styles["experience__items"]}>
        {experiences.map((exp, index) => (
            <div className={styles["experience__items--item"]} key={index}>
              <h1 className={styles["experience__items--title"]}>{exp.title}</h1>
              <div className={styles["experience__items--description"]}>

                <h1>{exp.description}</h1>
                <h2>Team Size: {exp.teamSize}</h2>
                <ul>
                  {exp.tasks.map((task, i) => (
                      <li key={i}>{task}</li>
                  ))}
                </ul>
                <span>Technologies: {exp.technologies}</span>
              </div>
              <a href="/cv/Kharchenko_CV_2025.pdf" target="_blank" rel="noopener noreferrer"
                 className={styles["experience__btn"]}> learn more</a>

                <div className={styles["experience__wrapper"]}>

                  <span className={styles["experience__wrapper--bubble"]}></span>
                  <span className={styles["experience__wrapper--bubble"]}></span>
                  <span className={styles["experience__wrapper--bubble"]}></span>
                  <span className={styles["experience__wrapper--bubble"]}></span>
                  <span className={styles["experience__wrapper--bubble"]}></span>
                  <span className={styles["experience__wrapper--bubble"]}></span>

                </div>
            </div>

          ))}

         </div>


      </section>
);
};
