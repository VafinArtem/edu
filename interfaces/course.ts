import {CommonPageModel} from "@/interfaces/common";
import {Direction} from "@/interfaces/courses";

export interface CoursePageModel extends CommonPageModel {
  name: string;
  promoDescription: string;
  colors: {
    common: string;
    blur: string;
    text: string;
    photoBackground: string;
  };
  typeIcon: string;
  typeName: {
    nominative: string;
    genitive: string;
    prepositional: string;
  };
  dates: {
    start: number,
    end?: number,
  };
  saleTimestamp?: number;
  city: {
    name: string;
    metroIcon?: string;
  };
  tariffs: TariffInfo[];
  speakers: {
    id: number;
    alias: string;
    surname: string,
    name: {
      nominative: string;
      genitive: string;
    },
    patronymic: {
      nominative: string;
      genitive: string;
    },
    photo: string;
    avatar: string;
    edu: Edu[];
    position: string;
    specialization: string;
    workExperience: number;
    aboutSlides: string[][];
  }[];
  advantages?: string[];
  program: CourseProgram;
  schedule: {
    description: string;
    days: DailySchedule[];
  };
  photos?: string[];
  place?: {
    address: string;
    desc?: string;
    metro?: string;
    position: [number, number];
    photos?: string[];
  };
  qa?: QAItem[];
  speakersCourses?: CourseShort[];
}

export interface DailySchedule {
  id: number;
  name: string;
  color: "red" | "blue";
  times: {
    start: string;
    end: string;
  };
  list: ScheduleItem[];
}

export interface ScheduleItem {
  id: number;
  name: string;
  icon: string;
  times: {
    start: string;
    end: string;
  };
}

export interface Edu {
  name: string;
  previewImg: string;
  url: string;
}

export interface Speaker {
  video?: string;
  id: number;
  alias: string;
  photo: string;
  name: string;
  position: string;
  specialization: string;
  workExperience: number;
  photoBackground: string;
  cite?: string;
  edu: Edu[];
  aboutSlides: string[][];
}

export interface SpeakerShort {
  id: number;
  name: string;
  avatar: string;
  photoBackground: string;
}

export interface SpeakerShortCard {
  id: number;
  name: string;
  alias: string;
  photo: string;
  photoBackground: string;
  specialization: string;
  coursesCount: number;
  direction: Direction;
}

export interface SpeakerPromo {
  id: number;
  name: string;
  specialization: string;
  photoBackground: string;
  photo: string;
}

export interface CourseProgram {
  text: string;
  pdfLink?: string;
  theory: {
    duration: number;
    learnList?: string[];
    themeList?: string[];
  };
  practice: {
    duration: number;
    learnList?: string[];
    themeList?: string[];
  };
}

export interface TariffInfo {
  id: number;
  name: string;
  description: string;
  prices: {
    current: number;
    old?: number;
  };
  includes?: string[];
}

export interface Place {
  city: string;
  address: string;
  desc?: string;
  metro: {
    station?: string;
    icon?: string;
  };
  position: [number, number];
  photos?: string[];
}

export interface QAItem {
  id: string;
  question: string;
  answer: string;
}

export interface CourseShort {
  id: number;
  alias: string;
  name: string;
  courseType: {
    name: string
    color: string;
    background: string;
  };
  price: number;
  icon?: string;
  date?: number;
  location?: string;
  photo?: string;
  photoBackground?: string;
  speakers?: string[];
}
