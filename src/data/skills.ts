export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "Languages & Tools",
    skills: [
      { name: "Python", level: 95, icon: "code" },
      { name: "SQL", level: 90, icon: "database" },
      { name: "R", level: 75, icon: "bar-chart" },
      { name: "Git", level: 85, icon: "git-branch" },
    ],
  },
  {
    category: "ML & Data Science",
    skills: [
      { name: "Scikit-learn", level: 90, icon: "brain" },
      { name: "TensorFlow", level: 80, icon: "cpu" },
      { name: "PyTorch", level: 85, icon: "zap" },
      { name: "Pandas", level: 95, icon: "table" },
      { name: "NLTK", level: 80, icon: "message-square" },
    ],
  },
  {
    category: "Cloud & Big Data",
    skills: [
      { name: "Azure", level: 85, icon: "cloud" },
      { name: "Databricks", level: 90, icon: "database" },
      { name: "Spark", level: 80, icon: "activity" },
      { name: "MLflow", level: 75, icon: "trending-up" },
    ],
  },
  {
    category: "Soft Skills",
    skills: [
      { name: "Leadership", level: 90, icon: "users" },
      { name: "Communication", level: 85, icon: "message-circle" },
      { name: "Cross-functional Collaboration", level: 90, icon: "handshake" },
      { name: "Problem Solving", level: 95, icon: "lightbulb" },
    ],
  },
];
