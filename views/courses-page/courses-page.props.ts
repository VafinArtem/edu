import {CourseShort} from "@/interfaces/course";
import {DirectionWithAudience, FilterItem, Option} from "@/interfaces/courses";

export interface CoursesPageProps {
  title?: string;
  seoText?: string;
  courseTypes: Option[];
  filters: FilterItem[];
  directions: DirectionWithAudience[];
  courses: CourseShort[];
  enableAdvancedTraining: boolean;
  coursesCount: number;
  pages: number;
}
