export interface Role {
  title: string;
  duration: string;
  location: string;
  role: string[];
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
        role: [
          "Focused on driving revenue recovery by building predictive routing models for rejected loan applications and automating critical ETL processes to enhance reporting efficiency and reduce costs",
        ],
        tags: ["Leadership", "Azure", "Python", "Databricks"],
      },
      {
        title: "Executive",
        duration: "Jun 2023 - Dec 2023",
        location: "Pune, India",
        role: [
          "Improved customer risk assessment and approval rates by enriching customer records with diverse data sources, and refined credit policies using statistical and clustering models to identify new safe lending opportunities",
        ],
        tags: ["ML", "SQL", "Risk Modeling", "ETL"],
      },
      {
        title: "Data Technology Trainee",
        duration: "Jan 2022 - May 2023",
        location: "Pune, India",
        role: [
          "Optimized marketing expenditures and customer retention by building advanced probabilistic and ensemble models, and automated manual call logging with NLP and time series forecasting to boost conversion rates",
        ],
        tags: ["Python", "Machine Learning", "Data Analysis"],
      },
    ],
  },
];
