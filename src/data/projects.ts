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
    description: "Developed a deep learning solution with a hybrid CNN-Mixture of Experts architecture for the NeurIPS EEG Challenge, successfully enabling Brain-Computer Interface (BCI) models to generalize across subjects by preventing subject-specific overfitting.",
    thumbnail: "/projects/eeg.png",
    category: "research",
    tags: ["Deep Learning", "Signal Processing", "PyTorch", "CNNs"],
    impact: "Competing in international ML challenge with team",
    status: "Completed",
    links: {
      github: "https://github.com/semwalhritvik/eeg-challenge",
    },
    featured: true,
    year: 2025,
  },
  {
    id: "credit-risk-prediction",
    title: "Credit Risk Prediction",
    description: "Built a two-stage classification pipeline using Random Forest for feature selection and Decision Trees for prediction to balance high accuracy with regulatory interpretability requirements.",
    thumbnail: "/projects/credit_risk.png",
    category: "finance",
    tags: ["Python", "TensorFlow", "Scikit-learn", "Streamlit", "PowerBI"],
    impact: "Achieved optimal performance while maintaining explainability; deployed with real-time GUI",
    status: "Completed",
    links: {
      github: "https://github.com/semwalhritvik/credit-risk-prediction",
    },
    featured: true,
    year: 2025,
  },
  {
    id: "watermarkd-ai",
    title: "Watermarkd - AI Watermark Generation",
    description: "Developed a dual-approach watermarking system using invisible semantic embeddings and stylometric feature extraction to robustly detect AI-generated content even after modification.",
    thumbnail: "/projects/watermarkd.png",
    category: "nlp",
    tags: ["NLP", "TensorFlow", "MLOps", "Docker", "GCP"],
    impact: "Achieved 95% detection accuracy against paraphrasing; scalable production deployment",
    status: "Completed",
    links: {
      github: "https://github.com/semwalhritvik/watermarkd",
    },
    featured: true,
    year: 2025,
  },
  {
    id: "lighthouse-captcha",
    title: "Lighthouse CAPTCHA",
    description: "Created an accessible authentication system using mobile sensor data (accelerometer/gyroscope) to classify authentic phone lifting gestures, replacing visual puzzles for users with disabilities.",
    thumbnail: "/projects/lighthouse.png",
    category: "accessibility",
    tags: ["Mobile Sensors", "Scikit-learn", "Signal Processing", "Feature Engineering"],
    impact: "Reduced verification time to <3 seconds and eliminated accessibility barriers",
    status: "Completed",
    links: {
      github: "https://github.com/semwalhritvik/lighthouseapi",
    },
    featured: false,
    year: 2022,
  },
  {
    id: "solar-panel-cv",
    title: "Sky Region Detection for Solar Panels",
    description: "Designed a computer vision model using OpenCV and image segmentation to analyze sky visibility at various angles, optimizing solar panel placement for maximum energy capture.",
    thumbnail: "/projects/solar.png",
    category: "computer-vision",
    tags: ["OpenCV", "Computer Vision", "Image Processing", "NumPy"],
    impact: "Enabled data-driven positioning for improved installation ROI",
    status: "Completed",
    links: {
      github: "https://github.com/semwalhritvik/Sky-Region-Detection",
    },
    featured: false,
    year: 2022,
  },
  {
    id: "algorhythm-music",
    title: "Algorhythm - Music Recommendation",
    description: "Engineered an end-to-end music analytics platform combining audio signal processing for spectral feature extraction with a hybrid collaborative and content-based filtering system.",
    thumbnail: "/projects/algorhythm.png",
    category: "media",
    tags: ["PyTorch", "Librosa", "Spotify API", "React", "FastAPI"],
    impact: "85% genre classification accuracy and 0.15 RMSE for recommendation precision",
    status: "In Progress",
    links: {
      github: "https://github.com/semwalhritvik/algorhythm",
    },
    featured: true,
    year: 2025,
  },
  // {
  //   id: "healthcare-readmission",
  //   title: "Healthcare Readmission Prediction",
  //   description: "Built a comprehensive risk stratification system using ensemble models and survival analysis to predict hospital readmissions, utilizing SHAP values for clinical interpretability.",
  //   thumbnail: "/projects/healthcare.jpg",
  //   category: "healthcare",
  //   tags: ["XGBoost", "SHAP", "Survival Analysis", "Apache Spark", "PostgreSQL"],
  //   impact: "Achieved 87% AUC for 30-day readmission prediction on 50K+ records",
  //   status: "Completed",
  //   links: {
  //     github: "https://github.com/semwalhritvik",
  //   },
  //   featured: false,
  //   year: 2025,
  // },
  // {
  //   id: "ecommerce-growth",
  //   title: "E-commerce Customer Analytics",
  //   description: "Developed an integrated growth platform implementing RFM segmentation, churn prediction, and dynamic pricing algorithms to optimize customer lifecycle and retention.",
  //   thumbnail: "/projects/ecommerce.jpg",
  //   category: "marketing",
  //   tags: ["XGBoost", "RFM Analysis", "A/B Testing", "CLV Modeling", "Apache Airflow"],
  //   impact: "92% churn prediction accuracy and 18% retention improvement",
  //   status: "Completed",
  //   links: {
  //     github: "https://github.com/semwalhritvik",
  //   },
  //   featured: false,
  //   year: 2025,
  // },
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "research", label: "Research" },
  { id: "ml-production", label: "ML Production" },
  { id: "analytics", label: "Analytics" },
  { id: "data-engineering", label: "Data Engineering" },
];
