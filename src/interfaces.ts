export interface Language {
  name: string;
}

export interface Job {
  id: string | number;
  company: string;
  logo: string;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: Array<{ name: string }>;
  tools: string[];
}

export type Jobs = Job[];
// or
// export interface Jobs extends Job[] {}



// export interface Jobs extends Array<Job> {}
