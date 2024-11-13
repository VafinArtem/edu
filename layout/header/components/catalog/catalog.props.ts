import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface CatalogProps extends DetailedHTMLProps<HTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  href: string;
  color?: "white" | "black";
}
