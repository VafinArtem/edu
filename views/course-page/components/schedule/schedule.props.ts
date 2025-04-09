import {CourseForPdf, DailySchedule} from "@/interfaces/course";

export interface ScheduleProps {
  className?: string;
  text: string;
  courseTypeName: string;
  pdfLink?: string;
  schedule: DailySchedule[];
  courseForPdf: CourseForPdf;
}
