export interface CommonPageModel {
  alias: string;
  id: string;
  _id: number;
  metaTitle: string;
  metaDescription: string;
}

export interface Review {
  id: string;
  avatar: string;
  name: string;
  position: string;
  text: string;
}

export interface ExampleItem {
  id: number;
  name: string;
  description?: string;
  images: {image: string, description: string}[];
}

export interface NavigationLink {
  name: string;
  href: string;
}
