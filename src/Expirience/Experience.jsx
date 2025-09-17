import styles from "./Experience.module.scss";

const experiences = [
  {
    title: "Frontend Engineer at Growe",
    duration: "March 2024 - May 2025",
    description: (
      <span>Customer: <b>Growe</b> | Domain: Finance, iGaming</span>
    ),
    teamSize: "6 Developers, 1 Team Lead, 1 QA",
    tasks: [
      "Developed and maintained high-performance multi-page applications and websites using React and Next.js, ensuring accessibility and responsiveness across devices.",
      "Implemented A/B testing and experiment management with GrowthBook, integrating feature flags to optimize user engagement and conversion rates.",
      "Built and configured game analytics dashboards and test groups using PixiJS, handling complex API interactions and configuration setups for performance optimization.",
      "Integrated and maintained REST APIs, handled data flows, user input, form validation, and core business logic.",
      "Resolved front-end issues, debugged anomalies, and ensured stable performance across multiple platforms.",
      "Integrated third-party libraries and ensured proper configuration to maintain application stability and feature consistency.",
      "Stayed updated with emerging technologies and applied best practices for system enhancements."
    ],
    technologies: "JavaScript/TypeScript, React, Next.js, PixiJS, Redux, Material UI, Styled Components, Jest, React Testing Library, Git, Webpack, Vite, A/B Testing"
  },
  {
    title: "Full-Stack E-commerce Platform",
    duration: "Freelance project, 2 months",
    description: "Full-stack platform for ordering car parts with real-time updates and CRM integration",
    teamSize: "Solo project",
    tasks: [
      "Developed a full-stack e-commerce platform using Next.js (SSR) and Express (Node.js) for backend logic.",
      "Implemented dynamic product filtering, shopping cart, step-by-step checkout, and order tracking.",
      "Built a custom CRM system to manage customer data, order history, and payment status.",
      "Integrated a Telegram bot for employer notifications and real-time order updates.",
      "Developed backend logic for secure user authentication, form validation, and order processing.",
      "Connected to external APIs for real-time pricing, product availability, and logistics updates.",
      "Ensured SEO optimization and fast performance through SSR and caching strategies.",
        "Ensured SEO optimization and fast performance through SSR and caching strategies.",
        "Ensured SEO optimization and fast performance through SSR and caching strategies."
    ],
    technologies: "Next.js, Node.js, Express, MongoDB, JavaScript/TypeScript, REST APIs, Socket.IO, Git, CSS/SCSS"
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
