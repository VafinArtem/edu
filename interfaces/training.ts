import {ProgramType, ScheduleType} from "@/helpers/contants";

export interface Edu {
  name: string;
  previewImg: string;
  url: string;
}

export interface Speaker {
  video?: string;
  id: string;
  photo: string;
  name: string;
  position: string;
  workExperience: string;
  cite?: string;
  edu: Edu[];
}

export interface SpeakerShort {
  id: string;
  name: string;
  avatar: string;
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
