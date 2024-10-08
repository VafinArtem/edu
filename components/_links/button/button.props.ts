import {AnchorHTMLAttributes, DetailedHTMLProps} from "react";

export interface ButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  size?: "default" | "wide";
  isExternal?: boolean;
}
