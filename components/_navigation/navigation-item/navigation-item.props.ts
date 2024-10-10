import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface NavigationItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  href: string;
}
