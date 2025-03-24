import {CourseShort} from "@/interfaces/course";

export interface CoursesPageModel {
  courses: CourseShort[];
  pages: number;
  coursesCount: number;
}

export interface Direction {
  name: {
    nominative: string;
    dative: string;
  };
  icon: string;
  color: string;
  id: number;
  alias: string;
  specializations: {
    name: string;
    alias: string;
    id: string
  }[];
  count?: number;
}

export interface DirectionWithSpecializations extends Direction {

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
