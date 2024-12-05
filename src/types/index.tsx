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

// GIT HUB TYPES
export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  topics: string[];
  fork: boolean;
  owner: {
    login: string;
  };
  private: boolean;
  full_name: string;
}
export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  topics: string[];
  fork: boolean;
  owner: {
    login: string;
  };
  private: boolean;
  full_name: string;
}

export interface GithubBranch {
  name: string;
  commit: Commit;
  protected: boolean;
}

export interface Commit {
  sha: string;
  url: string;
}
