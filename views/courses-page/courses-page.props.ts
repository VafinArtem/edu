import {Direction, FilterItem, Option} from "@/interfaces/courses";

export interface CoursesPageProps {
  courseTypes: Option[];
  filters: FilterItem[];
  directions: Direction[];
}
