export type PageRoute = 'home' | 'works' | 'services' | 'about' | 'skills' | 'contact' | 'case-study';

export type ProjectCategory = 'all' | 'branding' | 'packaging' | 'editorial' | 'typography';

export interface ProjectMedia {
  url: string;
  caption: string;
  type: 'image' | 'video-mock';
  aspect?: string;
}

export interface DesignToken {
  name: string;
  value: string;
  type: 'color' | 'font';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  coverImage: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'wide';
  featured: boolean;
  brief: string;
  solution: string;
  deliverables: string[];
  gallery: ProjectMedia[];
  tokens?: DesignToken[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface Award {
  year: string;
  title: string;
  category: string;
  organization: string;
  project: string;
}

export interface Service {
  index: string;
  name: string;
  tagline: string;
  description: string;
  timeline: string;
  deliverables: string[];
  deliverablesDetailed: { title: string; desc: string }[];
}

export interface ToolSkill {
  name: string;
  level: number;
  category: 'software' | 'discipline';
  description: string;
}
