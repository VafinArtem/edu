import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CollapseItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  name: string;
  contentClassName?: string;
  initialIsShow?: boolean;
}
