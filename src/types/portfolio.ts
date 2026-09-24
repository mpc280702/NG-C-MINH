export type PageRoute = 'home' | 'works' | 'services' | 'about' | 'skills' | 'contact' | 'case-study';

export type ProjectCategory = 'all' | 'branding' | 'packaging' | 'editorial' | 'typography';

export type ProjectType = 'client' | 'concept' | 'personal';

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
  projectType: ProjectType;
  projectTypeLabel?: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  role: string;
  services: string[];
  coverImage: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'wide';
  featured: boolean;
  brief: string;
  problem?: string;
  objective?: string;
  research?: string;
  creativeDirection?: string;
  process?: string;
  solution: string;
  results?: string;
  deliverables: string[];
  gallery: ProjectMedia[];
  tokens?: DesignToken[];
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

export type SkillCategory = 'tools' | 'specialization' | 'digital';
export type SkillProficiency = 'Advanced' | 'Intermediate' | 'Working Knowledge';

export interface ToolSkill {
  name: string;
  proficiency: SkillProficiency;
  proficiencyLabel: string;
  category: SkillCategory;
  description: string;
  experience: string;
}

export interface DesignProcessStep {
  step: string;
  title: string;
  enTitle: string;
  summary: string;
  details: string;
}
