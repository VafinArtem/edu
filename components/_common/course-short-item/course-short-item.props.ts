import {CourseShort} from "@/interfaces/course";

export interface CourseShortItemProps {
  course: CourseShort;
  withPhoto?: boolean;
  positionPhoto?: "top" | "left";
  background?: "white" | "gray";
  className?: string;
  isPastCourse?: boolean;
}
