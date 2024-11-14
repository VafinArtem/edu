import {Option} from "@/interfaces/courses";
import {CourseShort} from "@/interfaces/course";

export interface CoursesProps {
  courseTypes: Option[];
  courses: CourseShort[];
}
