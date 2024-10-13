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
