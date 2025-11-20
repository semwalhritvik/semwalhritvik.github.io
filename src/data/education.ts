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
      "Coursework: Deep Learning, Large Language Models, Advanced Database Systems",
      "Research: EEG Signal Classification using Autoencoders (HBN-EEG Challenge)",
      "Teaching Assistant: Data Science & Database courses",
    ],
    tags: ["Deep Learning", "LLMs", "Research"],
  },
  {
    institution: "VIT Bhopal",
    logo: "/logos/vit.png",
    degree: "B.Tech Computer Science Engineering",
    specialization: "Gaming Technology",
    duration: "2018 - 2022",
    location: "Bhopal, India",
    gpa: "8.65/10",
    highlights: [
      "Published research on stance detection using hybrid lexical-semantic approaches",
      "Team Leader: Flipkart GRID 2.0 (All India Rank 83)",
      "Leadership: Model UN, Hostel Administration",
    ],
    tags: ["Computer Science", "Gaming Tech", "Research"],
  },
];
