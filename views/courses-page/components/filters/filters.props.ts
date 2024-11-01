import {DetailedHTMLProps, HTMLAttributes} from "react";
import {FilterItem, Option} from "@/interfaces/courses";

export interface FiltersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  showMobileFilters: boolean;
  setShowMobileFilters: (status: boolean) => void;
  filters: FilterItem[];
  courseTypes: Option[];
}
