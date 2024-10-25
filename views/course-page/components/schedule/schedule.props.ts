import {DailySchedule} from "@/interfaces/training";

export interface ScheduleProps {
  className?: string;
  text: string;
  courseTypeName: string;
  pdfLink?: string;
  schedule: DailySchedule[];
}
