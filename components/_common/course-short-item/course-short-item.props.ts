import {CourseShort} from "@/interfaces/course";

export interface CourseShortItemProps {
  course: CourseShort;
  withPhoto?: boolean;
  background?: "white" | "gray";
  className?: string;
  isPastCourse?: boolean;
}
