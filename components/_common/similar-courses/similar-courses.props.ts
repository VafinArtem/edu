import {CourseShort} from "@/interfaces/training";

export interface SimilarCoursesProps {
  courses: CourseShort[];
  className?: string;
  title: string;
  cardColor: "white" | "gray";
}
