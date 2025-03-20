import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface SectionItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  gap?: "default" | "20";
}
