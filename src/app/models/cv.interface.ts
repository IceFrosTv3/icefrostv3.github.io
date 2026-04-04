export interface CvData {
  lang: 'ru' | 'en' | 'pl';
  name: string;
  title: string;
  contact: {
    phones: string[];
    email: string;
    location: string;
    relocation: string;
    github: string;
    telegram: string;
    linkedin: string;
    instagram?: string;
  };
  profile: string;
  hardSkills: string[];
  softSkills: string[];
  experience: {
    company: string;
    role: string;
    period: string;
    bullets: string[];
  }[];
  education: {
    institution: string;
    specialty: string;
    period: string;
  }[];
  projects: {
    name: string;
    description: string;
    tech: string[];
    github: string;
    demo?: string;
  }[];
  languages: {
    name: string;
    level: string;
  }[];
  references: {
    name: string;
    role: string;
    contacts: { type: string; value: string }[];
  }[];
}
