import {Edu} from "@/interfaces/course";

export interface EduItemProps extends Edu {
  className?: string;
  color?: "primary" | "white";
}
