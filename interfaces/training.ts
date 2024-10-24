import {ProgramType, ScheduleType} from "@/helpers/contants";

export interface TrainingPageModel {
  alias: string;
  name: string;
  promoDescription: string;
  id: string;
  _id: string;
  metaTitle: string;
  colors: {
    common: string;
    blur: string;
    text: string;
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
  };
  tariffs: TariffInfo[];
  speakers: {
    id: number;
    surname: string,
    name: {
      nominative: string;
    },
    patronymic: {
      nominative: string;
    },
    promoPhotos: {
      desktop: string;
      mobile: string;
    };
    edu: Edu[];
    position: string;
    specialization: string;
    workExperience: number;
    aboutSlides: string[];
  }[];
  advantages?: string[];
  program: TrainingProgram;
}

export interface Edu {
  name: string;
  previewImg: string;
  url: string;
}

export interface Speaker {
  video?: string;
  id: number;
  photo: string;
  name: string;
  position: string;
  specialization: string;
  workExperience: number;
  cite?: string;
  edu: Edu[];
  aboutSlides: string[];
}

export interface SpeakerShort {
  id: string;
  name: string;
  avatar: string;
}

export interface SpeakerPromo {
  id: number;
  name: string;
  specialization: string;
  photos: {
    desktop: string;
    mobile: string;
  };
}

export interface TrainingProgram {
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

export interface DailySchedule {
  id: string;
  name: string;
  time: string;
  type: keyof typeof ProgramType;
  list: ScheduleItem[];
}

export interface ScheduleItem {
  type: keyof typeof ScheduleType;
  name: string;
  time: string;
}

export interface TariffInfo {
  id: string;
  name: string;
  description: string;
  prices: {
    current: number;
    old?: number;
  };
  includes?: string[];
}

export interface Place {
  id: string;
  city: string;
  address: string;
  phone?: string;
  email?: string;
  desc?: string;
  metro?: {
    station: string;
    icon: string;
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
  id: string;
  name: string;
  courseTypeName: string;
  price: number;
  icon?: string;
  date?: string;
  location?: string;
  photo?: string;
  photoMobile?: string;
  speakers?: string[];
}
