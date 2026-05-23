export interface BlogAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface TocItem {
  id: string;
  text: string;
  level: number; // 2 = h2, 3 = h3
}

/** Lightweight post shape — used on listing pages */
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  updatedDate?: string;
  author: BlogAuthor;
  category: string;
  tags: string[];
  featured: boolean;
  draft: boolean;
  readingTime: number; // minutes
  wordCount: number;
  image?: string;
}

/** Full post shape — includes raw MDX content + extracted TOC */
export interface BlogPostWithContent extends BlogPost {
  content: string;
  toc: TocItem[];
}
