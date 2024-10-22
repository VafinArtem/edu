export interface ExampleItem {
  id: number;
  name: string;
  image: string;
  description: string;
  images?: string[];
}

export interface GalleryItem {
  id: string;
  description?: string;
  img: string;
}
