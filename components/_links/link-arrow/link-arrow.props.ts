import {AnchorHTMLAttributes, DetailedHTMLProps} from "react";

export interface LinkArrowProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  iconDirection: "bottom-right" | "mid-right" | "top-right";
  color: "primary" | "primary-2";
  size?: "small" | "medium" | "large";
  borderRadius?: "small" | "medium" | "large";
  withBackground?: boolean;
  isExternal?: boolean;
}
