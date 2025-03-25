import {CourseShort} from "@/interfaces/course";
import {OneNewsModel} from "@/interfaces/one-news";

export interface OneNewsPageProps {
  news: OneNewsModel;
  courses: CourseShort[];
}
