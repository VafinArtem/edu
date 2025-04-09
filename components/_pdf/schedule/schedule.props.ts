import {DailySchedule} from "@/interfaces/course";

export interface ScheduleProps {
  courseType: string;
  schedule: DailySchedule[];
  location: {
    city: string;
    metro: string;
    address: string;
  };
}
