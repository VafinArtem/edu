import {CourseForPdf, CourseProgram} from "@/interfaces/course";

export interface ProgramProps {
  className?: string;
  courseTypeName: string;
  courseForPdf: CourseForPdf;
  program: CourseProgram;
}
