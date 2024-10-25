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
  promoPhotos: {
    desktop: string;
    mobile: string;
  };
  position: string;
  workExperience: number;
  specialization: string;
  about?: string;
  edu?: Edu[];
  examples?: ExampleItem[];
  courses?: CourseShort[];
}

export interface ExampleItem {
  id: number;
  name: string;
  description: string;
  images: string[];
}

export interface GalleryItem {
  id: string;
  description?: string;
  img: string;
}
