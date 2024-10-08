import {CourseShort} from "@/interfaces/training";

export interface CourseShortItemProps {
  course: CourseShort;
  withPhoto?: boolean;
  background?: "white" | "gray";
  className?: string;
}
