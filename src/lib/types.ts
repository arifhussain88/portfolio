export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMetric = {
  before: string;
  after: string;
  label: string;
};

export type Project = {
  id: string;
  name: string;
  period: string;
  summary: string;
  detail: string;
  technology: string[];
  links: ProjectLink[];
  metric?: ProjectMetric;
};

export type SideProject = {
  id: string;
  name: string;
  period: string;
  summary: string;
  href: string | null;
};

export type ExperienceRole = {
  role: string;
  period: string;
  story: string;
};

export type ExperienceEntry = {
  company: string;
  location: string;
  years: string;
  summary: string;
  roles: ExperienceRole[];
};
