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

export interface Values {
  email: string;
  phone: string;
  message: string;
  attachment?: File;
}

export interface CategoriesSearch {
  items: Category[];
}

export interface FormErrors {
  message: string;
  errors: Errors;
}

export interface Errors {
  phone: string[];
  attachment: string[];
}
