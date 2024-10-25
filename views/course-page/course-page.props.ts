import {CoursePageModel, CourseShort} from "@/interfaces/course";

export interface CoursePageProps {
  training: CoursePageModel;
  similarCourses: CourseShort[] | null;
}
