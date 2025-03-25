import {CourseShort} from "@/interfaces/course";
import {DirectionWithAudience} from "@/interfaces/courses";

export interface NotFoundPageProps {
  directions: DirectionWithAudience[];
  color?: "white" | "gray";
  courses?: CourseShort[];
}
