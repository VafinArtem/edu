import {CourseShort} from "@/interfaces/course";
import {Direction} from "@/interfaces/courses";

export interface NotFoundPageProps {
  directions: Direction[];
  color?: "white" | "gray";
  courses?: CourseShort[];
}
