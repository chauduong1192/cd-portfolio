export interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  topics: string[];
}
