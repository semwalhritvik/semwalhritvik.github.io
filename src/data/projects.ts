export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
  tags: string[];
  impact: string;
  status: "In Progress" | "Deployed" | "Completed";
  links: {
    github?: string;
    demo?: string;
  };
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    id: "eeg-classification",
    title: "EEG Signal Classification",
    description: "Developing autoencoder-based preprocessing pipeline for the HBN-EEG Foundation Challenge. Implementing denoising and signal amplification techniques for improved classification accuracy.",
    thumbnail: "/projects/eeg.jpg",
    category: "research",
    tags: ["Deep Learning", "Signal Processing", "PyTorch", "Autoencoders"],
    impact: "Competing in international ML challenge with team",
    status: "In Progress",
    links: {
      github: "https://github.com/semwalhritvik",
    },
    featured: true,
    year: 2024,
  },
  {
    id: "credit-risk-model",
    title: "Credit Risk Assessment System",
    description: "Built end-to-end ML pipeline for loan default prediction achieving 85%+ accuracy. Implemented feature engineering, model selection, and deployment on Azure.",
    thumbnail: "/projects/credit.jpg",
    category: "ml-production",
    tags: ["Python", "Scikit-learn", "Azure", "Risk Modeling"],
    impact: "$1.2M+ business value generated",
    status: "Deployed",
    links: {},
    featured: true,
    year: 2023,
  },
  {
    id: "customer-segmentation",
    title: "Customer Segmentation Analytics",
    description: "Developed unsupervised learning models for customer segmentation across 2M+ customers. Improved marketing campaign efficiency by 30%.",
    thumbnail: "/projects/segmentation.jpg",
    category: "analytics",
    tags: ["Python", "Clustering", "Pandas", "Visualization"],
    impact: "30% improvement in targeting efficiency",
    status: "Deployed",
    links: {},
    featured: true,
    year: 2023,
  },
  {
    id: "churn-prediction",
    title: "Churn Prediction Model",
    description: "Created ML model to predict customer churn with 78% precision. Implemented real-time scoring system for proactive retention strategies.",
    thumbnail: "/projects/churn.jpg",
    category: "ml-production",
    tags: ["Machine Learning", "Python", "Real-time Scoring"],
    impact: "Reduced churn by identifying at-risk customers",
    status: "Deployed",
    links: {},
    featured: false,
    year: 2022,
  },
  {
    id: "automated-reporting",
    title: "Automated Reporting System",
    description: "Built ETL pipelines and automated dashboards for executive reporting. Processes 100K+ daily transactions and generates insights.",
    thumbnail: "/projects/reporting.jpg",
    category: "data-engineering",
    tags: ["Python", "SQL", "Azure", "Power BI"],
    impact: "20+ hours saved weekly",
    status: "Deployed",
    links: {},
    featured: false,
    year: 2023,
  },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "research", label: "Research" },
  { id: "ml-production", label: "ML Production" },
  { id: "analytics", label: "Analytics" },
  { id: "data-engineering", label: "Data Engineering" },
];
