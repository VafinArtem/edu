import {CommonPageModel, ExampleItem} from "@/interfaces/common";
import {CourseShort, Edu} from "@/interfaces/course";

export interface SpeakerPageModel extends CommonPageModel {
  surname: {
    nominative: string;
    genitive: string;
    instrumental: string;
  }
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

export interface GalleryItem {
  id: string;
  description?: string;
  img: string;
}
