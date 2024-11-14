import {CourseShort} from "@/interfaces/course";

export interface CoursesPageModel {
  courses: CourseShort[];
  pages: number;
  coursesCount: number;
}

export interface Direction {
  name: string;
  icon: string;
  color: string;
  id: number;
  alias: string;
  count?: number;
}

export interface DirectionWithSpecializations extends Direction {
  specializations: {
    name: string;
    alias: string;
    id: string
  }[];
}

export interface FilterItem {
  name: string;
  inputName: string;
  id: number;
  values: {
    id: number;
    name: string;
    value: string;
    alias?: string;
  }[];
}

export interface Option {
  name: string;
  value: string;
  alias?: string;
  color?: string;
}
