export type ProjectLink = {
  label: string;
  href: string;
};

export type StackGroup = {
  label: string;
  items: string[];
};

/** Which illustrated preview a featured project shows. */
export type PreviewKind = "northline" | "chalkback";

export type FeaturedProject = {
  id: string;
  name: string;
  period: string;
  kind: string;
  summary: string;
  detail: string;
  highlights: string[];
  stack: StackGroup[];
  links: ProjectLink[];
  preview: PreviewKind;
  /** How AI tooling was used, and how the output was kept in check. */
  workflow: {
    note: string;
    practices: string[];
  };
};

/** The main production system, shown as a wide card with its scope. */
export type FlagshipProject = {
  id: string;
  name: string;
  company: string;
  period: string;
  kind: string;
  summary: string;
  detail: string;
  scope: string[];
  facts: Stat[];
  stack: StackGroup[];
  links: ProjectLink[];
  screens: Screenshot[];
};

export type Screenshot = {
  src: string;
  title: string;
  caption: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  name: string;
  company: string;
  period: string;
  kind: string;
  summary: string;
  detail: string;
  technology: string[];
  links: ProjectLink[];
};

export type SideProject = {
  id: string;
  name: string;
  period: string;
  summary: string;
  technology: string[];
  href: string | null;
};

export type ExperienceRole = {
  role: string;
  period: string;
  points: string[];
};

export type ExperienceEntry = {
  company: string;
  location: string;
  years: string;
  summary: string;
  roles: ExperienceRole[];
};

export type Stat = {
  value: string;
  label: string;
};
