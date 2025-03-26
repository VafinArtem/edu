import {Audience} from "@/interfaces/common";
import {CourseShort} from "@/interfaces/course";

export interface CoursesPageModel {
  courses: CourseShort[];
  pages: number;
  coursesCount: number;
  metaTitle?: string;
  metaH1?: string;
  metaDescription?: string;
  metaRobots?: string;
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
  count?: number;
}

export interface DirectionWithAudience extends Direction {
  audience: Audience[];
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
