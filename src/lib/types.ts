export type SkillGroup = {
  id: string;
  label: string;
  highlight: string[];
  items: string[];
};

export type ProjectCaseStudy = {
  id: string;
  name: string;
  period: string;
  featured: boolean;
  link: string | null;
  problem: string;
  solution: string;
  technology: string[];
  result: string;
  images: string[];
};

export type ExperienceEntry = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
};
