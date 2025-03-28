import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface ItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title: string;
  icon: ReactNode;
}
