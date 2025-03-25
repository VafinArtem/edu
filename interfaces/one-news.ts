import {CourseShort} from "@/interfaces/course";

export interface OneNewsModel {
  id: number;
  alias: string;
  name: string;
  type: string;
  date: number;
  description: string;
  promoImage: string;
  howItWas: string;
  images?: string[];
  courseInfo?: {
    speakers: NewsSpeaker[];
    promoDescription: string;
    typeName: {
      nominative: string;
      genitive: string;
      prepositional: string;
    };
    dates: {
      start: number;
      end?: number;
    };
    themes: {
      theory: string[][];
      practice: string[][];
    };
    courseCard?: CourseShort;
    speakerCourses?: CourseShort[];
  };
  metaTitle: string;
  metaDescription: string;
}

export interface NewsSpeaker {
  video?: {
    poster: string;
    url: string;
  };
  id: number;
  alias: string;
  photo: string;
  photoBackground: string;
  position: string;
  specialization: string;
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
    instrumental: string;
  },
}
