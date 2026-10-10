export interface DesignItem {
  id: string;
  name: string;
  category: string;
  keywords: string[];
  era: string;
  description: string;
  ready: boolean;
  promptLength: number;
}

export interface LibraryIndex {
  generatedAt: string;
  categories: string[];
  index: DesignItem[];
}