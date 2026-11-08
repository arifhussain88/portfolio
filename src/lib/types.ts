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

export type Project = {
  id: string;
  name: string;
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
  story: string;
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
