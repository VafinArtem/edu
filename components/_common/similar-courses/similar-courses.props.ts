import {CourseShort} from "@/interfaces/course";

export interface SimilarCoursesProps {
  courses: CourseShort[];
  className?: string;
  title: string;
  cardColor: "white" | "gray";
}
