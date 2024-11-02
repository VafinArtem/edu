import {DateRange} from "react-day-picker";

export interface DatesProps {
  initialDates?: DateRange;
  onSelectCB?: (dates: DateRange | undefined) => void;
}
