import {DailySchedule} from "@/interfaces/course";

export interface ScheduleDayProps {
  day: DailySchedule;
  location: {
    city: string;
    metro: string;
    address: string;
  };
}
