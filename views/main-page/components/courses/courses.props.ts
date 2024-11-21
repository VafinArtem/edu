import {CourseShort} from "@/interfaces/course";
import {Option} from "@/interfaces/courses";

export interface CoursesProps {
  courseTypes?: Option[];
  courses: CourseShort[];
}
