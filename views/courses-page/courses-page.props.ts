import {CourseShort} from "@/interfaces/course";
import {Direction, FilterItem, Option} from "@/interfaces/courses";

export interface CoursesPageProps {
  courseTypes: Option[];
  filters: FilterItem[];
  directions: Direction[];
  courses: CourseShort[];
  enableAdvancedTraining: boolean;
  coursesCount: number;
  pages: number;
}
