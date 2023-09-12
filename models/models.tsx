export interface Projects {
  items: Project[];
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  project_url?: string;
  image: string;
  image_dark: string;
  description: string;
  geo: Geo;
  categories: Category[];
}

export interface Geo {
  lat?: string;
  lng?: string;
}

export interface Category {
  id: number;
  name: string;
}
