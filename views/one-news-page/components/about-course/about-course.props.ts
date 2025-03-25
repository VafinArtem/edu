import {CourseShort} from "@/interfaces/course";

export interface AboutCourseProps {
  course: {
    typeName: {
      nominative: string;
      genitive: string;
      prepositional: string;
    },
    dates: {
      start: number,
      end?: number,
    },
    promoDescription: string;
    themes: {
      theory: string[][]
      practice: string[][]
    },
    courseCard?: CourseShort,
  };
}
