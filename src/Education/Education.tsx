import { useState } from "react";
import { GraduationCap, Calendar, MapPin, Award, BookOpen, Code2 } from "lucide-react";
import { Card } from "./card";
import { Badge } from "./badge";
import { Button } from "./button";
import styles from "./Education.module.scss";


const educationData = {
  university: "WSB Merito University",
  location: "Warsaw, Poland",
  degree: "Bachelor's Degree in Computer Science",
  faculty: "Faculty of Frontend Development",
  currentYear: "3rd Year",
  startDate: "2022",
  expectedGraduation: "2025",
  gpa: "4.2/5.0",
  status: "Currently Enrolled",
  modules: [
      {
      name: "Advanced React Development",
      description: "Deep dive into React ecosystem, hooks, context, and performance optimization",
      technologies: ["React", "Redux", "Next.js", "TypeScript"],
      completed: true
    },
    {
      name: "Full-Stack JavaScript",
      description: "End-to-end web development with modern JavaScript frameworks",
      technologies: ["Node.js", "Express", "MongoDB", "GraphQL"],
      completed: true
    },
    {
      name: "UI/UX Design Principles",
      description: "User-centered design, prototyping, and accessibility standards",
      technologies: ["Figma", "Adobe XD", "Sketch", "Principle"],
      completed: true
    },
    {
      name: "DevOps & Deployment",
      description: "Modern deployment strategies, containerization, and CI/CD pipelines",
      technologies: ["Docker", "AWS", "Vercel", "GitHub Actions"],
      completed: false
    },
    {
      name: "Mobile Development",
      description: "Cross-platform mobile app development and PWA concepts",
      technologies: ["React Native", "Expo", "PWA", "Firebase"],
      completed: false
    },
    {
      name: "Software Engineering",
      description: "Agile methodologies, testing, and software architecture patterns",
      technologies: ["Jest", "Cypress", "Scrum", "Design Patterns"],
      completed: true
    }
  ]
};

export default function EducationSection() {
  const [expandedModule, setExpandedModule] = useState<string | null>(null);

  const completedModules = educationData.modules.filter(m => m.completed).length;
  const totalModules = educationData.modules.length;
  const progressPercentage = (completedModules / totalModules) * 100;

  return (
    <div id="education" className={styles["education"]}>

      <div className={styles["education__header"]}>
        <h2 className={styles["education__title"]}>Education & Learning</h2>
        <p className={styles["education__subtitle"]}>Academic foundation meets practical expertise</p>
      </div>

      <Card className={styles["education__main-card"]}>
        <div className={styles["education__main-card-header"]}>
          <div className={styles["education__university-info"]}>
            <div className={styles["education__icon-wrapper"]}>
              <GraduationCap className={styles["education__icon"]} />
            </div>
            <div>
              <h3 className={styles["education__university"]}>{educationData.university}</h3>
              <p className={styles["education__degree"]}>{educationData.degree}</p>
              <p className={styles["education__faculty"]}>{educationData.faculty}</p>
            </div>
          </div>
          <Badge variant="outline" className={styles["education__status-badge"]}>
            {educationData.status}
          </Badge>
        </div>

        <div className={styles["education__main-card-content"]}>
          <div className={styles["education__info-grid"]}>
            <div className={styles["education__info-item"]}>
              <MapPin className={styles["education__info-icon"]} />
              <div>
                <p className={styles["education__info-title"]}>Location</p>
                <p className={styles["education__info-text"]}>{educationData.location}</p>
              </div>
            </div>
            <div className={styles["education__info-item"]}>
              <Calendar className={styles["education__info-icon"]} />
              <div>
                <p className={styles["education__info-title"]}>Timeline</p>
                <p className={styles["education__info-text"]}>{educationData.startDate} - {educationData.expectedGraduation}</p>
              </div>
            </div>
            <div className={styles["education__info-item"]}>
              <Award className={styles["education__info-icon"]} />
              <div>
                <p className={styles["education__info-title"]}>Current Status</p>
                <p className={styles["education__info-text"]}>{educationData.currentYear} • GPA: {educationData.gpa}</p>
              </div>
            </div>
          </div>

          <div className={styles["education__progress"]}>
            <div className={styles["education__progress-header"]}>
              <span>Academic Progress</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <div className={styles["education__progress-bar"]}>
              <div className={styles["education__progress-bar-fill"]} style={{ width: `${progressPercentage}%` }} />
            </div>
            <p className={styles["education__progress-text"]}>
              {completedModules} of {totalModules} core modules completed
            </p>
          </div>
        </div>
      </Card>

      <div className={styles["education__modules-grid"]}>
        {educationData.modules.map((module) => (
          <Card
            key={module.name}
            className={`${styles["education__module-card"]} ${module.completed ? styles["education__module-card--completed"] : ""}`}
            onClick={() => setExpandedModule(expandedModule === module.name ? null : module.name)}
          >
            <div className={styles["education__module-header"]}>
              <div className={styles["education__module-info"]}>
                <div className={`${styles["education__module-icon-wrapper"]} ${module.completed ? styles["education__module-icon-wrapper--completed"] : ""}`}>
                  <BookOpen className={styles["education__module-icon"]} />
                </div>
                <div>
                  <h4 className={styles["education__module-name"]}>{module.name}</h4>
                  <Badge variant={module.completed ? "default" : "secondary"} className={styles["education__module-badge"]}>
                    {module.completed ? "Completed" : "In Progress"}
                  </Badge>
                </div>
              </div>
            </div>
            <div className={styles["education__module-content"]}>
              <p className={styles["education__module-description"]}>{module.description}</p>
              {expandedModule === module.name && (
                <div className={styles["education__module-technologies"]}>
                  {module.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className={styles["education__technology-badge"]}>{tech}</Badge>
                  ))}
                  <Button size="sm" variant="outline" className={styles["education__module-button"]}>
                    <Code2 className={styles["education__module-button-icon"]} />
                    View Projects
                  </Button>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
