import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface FiltersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  showMobileFilters: boolean;
  setShowMobileFilters: (status: boolean) => void;
}
