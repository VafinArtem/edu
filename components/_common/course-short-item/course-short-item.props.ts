import {CourseShort} from "@/interfaces/training";

export interface CourseShortItemProps {
  course: CourseShort;
  withPhoto?: boolean;
  positionPhoto?: "top" | "left";
  background?: "white" | "gray";
  className?: string;
}
