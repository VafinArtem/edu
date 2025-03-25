import {CourseShort} from "@/interfaces/course";

export interface CoursesSliderProps {
  title: string;
  className?: string;
  courses: CourseShort[];
  cardColor: "white" | "gray";
  id?: string;
}
