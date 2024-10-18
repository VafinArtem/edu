import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface SectionTextHeadProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  text?: string;
}
