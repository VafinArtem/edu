import {FilterItem, Option} from "@/interfaces/courses";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface FiltersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  showMobileFilters: boolean;
  setShowMobileFilters: (status: boolean) => void;
  filters: FilterItem[];
  courseTypes: Option[];
  enableAdvancedTraining: boolean;
}
