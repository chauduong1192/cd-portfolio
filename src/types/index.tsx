export type Skill = {
  title: string;
  skills: string[];
};

export type Experience = {
  projectName?: string;
  desc: string;
  url?: string;
};

export type WorkExperience = {
  duration: string;
  company: string;
  companyUrl?: string;
  role: string;
  experience: string[];
  logo?: string;
};

export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  topics: string[];
  fork: boolean;
}

export type Short = {
  title: string;
  subTitle: string;
  description: string;
  tags: string[];
  slug: string;
  date: Date;
  username: string;
};

export type ShortBySlug = {
  meta: Short;
  content: string;
};
