import {AudienceWithCategory, CommonPageModel, ExampleItem} from "@/interfaces/common";
import {Direction} from "@/interfaces/courses";

export interface CoursePageModel extends CommonPageModel {
  name: string;
  promoDescription: string;
  isCertificate: boolean;
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
    name?: string;
    metroIcon?: string;
  };
  tariffs: TariffInfo[];
  speakers: {
    id: number;
    alias: string;
    surname: {
      nominative: string;
      genitive: string;
    },
    cite?: string,
    name: {
      nominative: string;
      genitive: string;
    },
    patronymic: {
      nominative: string;
      genitive: string;
    },
    photo: string;
    video?: {
      poster: string;
      url: string;
    };
    avatar: string;
    edu: Edu[];
    position: string;
    specialization: string;
    workExperience: number;
    aboutSlides: string[][];
    examples?: ExampleItem[];
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
    position: [string, string];
    photos?: string[];
  };
  qa?: QAItem[];
  speakersCourses?: CourseShort[];
  forWhom?: string;
  audience: AudienceWithCategory[];
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
  video?: {
    poster: string;
    url: string;
  };
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
  examples?: ExampleItem[];
}

export interface SpeakerShort {
  id: number;
  name: string;
  surname: string;
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
    id: number;
    duration?: number;
    learnList?: string[];
    themeList?: string[];
  }[];
  practice: {
    id: number;
    duration?: number;
    learnList?: string[];
    themeList?: string[];
  }[];
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
  city?: string;
  address: string;
  desc?: string;
  metro: {
    station?: string;
    icon?: string;
  };
  position: [string, string];
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
  days?: number;
  icon?: string;
  dates?: {
    start: number;
    end?: number;
  };
  location?: string;
  photo?: string;
  photoBackground?: string;
  speakers?: string[];
}

export interface CourseForPdf {
  id: number;
  name: string;
  description: string;
  colors: {
    background: string;
    text: string;
  };
  typeName: {
    nominative: string;
    genitive: string;
    prepositional: string;
  };
  date: string;
  location: string;
  speakers: {
    id: number;
    name: string;
    position: string;
  }[];
}
