import {DetailedHTMLProps, HTMLAttributes} from "react";
import {CourseShort} from "@/interfaces/course";

export interface CoursesProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  courses: CourseShort[];
}
