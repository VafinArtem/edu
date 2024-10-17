import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface SectionHeadProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  text?: string;
}
