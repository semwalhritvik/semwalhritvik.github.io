export interface Education {
  institution: string;
  logo: string;
  degree: string;
  specialization?: string;
  duration: string;
  location: string;
  gpa: string;
  highlights: string[];
  tags: string[];
}

export const education: Education[] = [
  {
    institution: "Northeastern University",
    logo: "/logos/northeastern.png",
    degree: "Master of Science in Data Science",
    duration: "2025 - 2027 (Expected)",
    location: "Boston, MA",
    gpa: "In Progress",
    highlights: [
      "Coursework: Machine Learning, Deep Learning, Large Language Models",
      "Projects: EEG Signal Classification using Autoencoders (HBN-EEG Challenge)",
      "Research: Stance detection using hybrid lexical-semantic approaches",
    ],
    tags: ["Deep Learning", "LLMs", "Machine Learning", "Data Science"],
  },
  {
    institution: "Vellore Institute of Technology, Bhopal",
    logo: "/logos/vit.png",
    degree: "B.Tech Computer Science Engineering",
    duration: "2018 - 2022",
    location: "Bhopal, India",
    gpa: "8.81/10",
    highlights: [
      "Coursework: Advanced Data Analytics using R, Database Management Systems, Algorithms",
      "Team Leader: Flipkart GRID 2.0 (All India Rank 83)",
      "Leadership: Model UN, Hostel Administration",
    ],
    tags: ["Computer Science", "Data Analytics", "Hackathon"],
  },
];
