export interface Role {
  title: string;
  duration: string;
  location: string;
  achievements: string[];
  tags: string[];
}

export interface Experience {
  company: string;
  logo: string;
  roles: Role[];
}

export const experiences: Experience[] = [
  {
    company: "Bajaj Finserv",
    logo: "/logos/bajaj.png",
    roles: [
      {
        title: "Unit Manager",
        duration: "Jan 2024 - Aug 2024",
        location: "Pune, India",
        achievements: [
          "Led cross-functional team implementing ML-driven loan routing system, reducing processing time by 40%",
          "Developed executive dashboards tracking $500M+ loan portfolio performance",
          "Mentored 5 junior analysts in data engineering and ML best practices",
        ],
        tags: ["Leadership", "Azure", "Python", "Databricks"],
      },
      {
        title: "Executive",
        duration: "Jun 2023 - Dec 2023",
        location: "Pune, India",
        achievements: [
          "Built credit risk models achieving 85%+ accuracy, preventing $800K+ in potential losses",
          "Automated ETL pipelines processing 100K+ daily transactions",
          "Created customer segmentation models improving targeting efficiency by 30%",
        ],
        tags: ["ML", "SQL", "Risk Modeling", "ETL"],
      },
      {
        title: "Data Technology Trainee",
        duration: "Jan 2022 - May 2023",
        location: "Pune, India",
        achievements: [
          "Developed churn prediction model with 78% precision",
          "Created automated reporting systems saving 20+ hours weekly",
          "Implemented data governance practices across department",
        ],
        tags: ["Python", "Machine Learning", "Data Analysis"],
      },
    ],
  },
];
