export interface Project {
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface YouTubeVideo {
  title: string;
  id: string;
}

export interface BlogPost {
  title: string;
  description: string;
  url: string;
  date: string;
  tags: string[];
}
