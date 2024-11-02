import {Direction, FilterItem, Option} from "@/interfaces/courses";
import {CourseShort} from "@/interfaces/course";

export interface CoursesPageProps {
  courseTypes: Option[];
  filters: FilterItem[];
  directions: Direction[];
  courses: CourseShort[];
  pages: number;
}
