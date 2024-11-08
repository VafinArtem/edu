import {CourseShort} from "@/interfaces/course";

export interface CoursesPageModel {
  courses: CourseShort[];
  pages: number;
  searchParams?: [string, string][];
}

export interface Direction {
  name: string;
  icon: string;
  color: string;
  id: number;
  alias: string;
}

export interface FilterItem {
  name: string;
  inputName: string;
  id: number;
  values: {
    id: number;
    name: string;
    value: string;
  }[];
}

export interface Option {
  name: string;
  value: number;
  color?: string;
}
