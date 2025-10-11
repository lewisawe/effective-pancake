import type { ReactElement } from 'react';

export interface Skill {
  name: string;
  // Fix: The 'JSX' namespace is not available in a .ts file. Using ReactElement type instead.
  icon: ReactElement;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

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

export interface Certification {
  name: string;
  issuer: string;
  url: string;
  icon: ReactElement;
}

export interface YouTubeVideo {
  title: string;
  id: string; // YouTube video ID
}

export interface BlogPost {
  title: string;
  description: string;
  url: string;
  date: string;
  tags: string[];
}