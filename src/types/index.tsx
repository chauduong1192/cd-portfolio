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

export interface Root {
  total: number;
  skip: number;
  limit: number;
  items: Item[];
}

export interface Item {
  fields: Fields;
}

export interface Fields {
  title: string;
  slug: string;
  author: Author;
  publishDate: string;
  body: any;
  tags: Tag[];
}

export interface Tag {
  name: string;
  slug: string;
}

export interface Author {
  fields: {
    name: string;
    websiteUrl: string;
  };
}
