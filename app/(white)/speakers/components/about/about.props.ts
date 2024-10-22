import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface AboutProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  content: string;
}
