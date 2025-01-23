import {CommonPageModel} from "@/interfaces/common";
import {CourseShort, Edu} from "@/interfaces/course";

export interface SpeakerPageModel extends CommonPageModel {
  surname: string,
  name: {
    nominative: string;
    genitive: string;
    instrumental: string;
  },
  patronymic: {
    nominative: string;
    genitive: string;
  },
  photo: string;
  colors: {
    photoBackground: string;
  };
  position: string;
  workExperience: number;
  specialization: string;
  specializationFull: string;
  about?: string;
  edu?: Edu[];
  examples?: ExampleItem[];
  courses?: CourseShort[];
  photos?: GalleryItem[];
}

export interface NavigationLink {
  name: string;
  href: string;
}

export interface ExampleItem {
  id: number;
  name: string;
  description?: string;
  images: {image: string, description: string}[];
}

export interface GalleryItem {
  id: string;
  description?: string;
  img: string;
}
