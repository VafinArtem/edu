import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface NavigationItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
}
