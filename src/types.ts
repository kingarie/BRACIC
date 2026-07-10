export type ActiveTab = 'home' | 'about' | 'what-we-do' | 'get-help' | 'resources' | 'news' | 'contact';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'youth' | 'parents' | 'educators' | 'cyberbullying' | 'general';
  description: string;
  readTime: string;
  content: string;
  links: { label: string; url: string }[];
}

export interface JournalEntry {
  id: string;
  date: string;
  mood: 'calm' | 'anxious' | 'sad' | 'hopeful' | 'angry' | 'empowered';
  text: string;
}

export interface SafetyPlan {
  triggers: string[];
  copingStrategies: string[];
  safeContacts: { name: string; contact: string }[];
  safePlaces: string[];
}
