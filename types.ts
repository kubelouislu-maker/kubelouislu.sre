export interface Metric {
  label: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
  change?: number; // percentage change (positive is good)
  description: string;
}

export interface Job {
  company: string;
  role: string;
  period: string;
  logoColor: string;
  highlights: string[];
  techStack: string[];
  achievements: Metric[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  summary: string;
  content: string[]; // Array of paragraphs for simplicity
}

export interface LifeEvent {
  year: string;
  title: string;
  location: string;
  description: string;
  iconType: 'birth' | 'school' | 'university' | 'milestone';
  details?: string[];
  coordinates: { x: number; y: number }; // Percentage 0-100 for abstract map
}

export interface Profile {
  name: string;
  role: string;
  experienceYears: number;
  contact: {
    phone?: string;
    email: string;
    location?: string;
  };
  summary: string;
}