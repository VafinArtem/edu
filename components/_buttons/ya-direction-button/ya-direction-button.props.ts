import {AnchorHTMLAttributes, DetailedHTMLProps} from "react";

export interface YaDirectionButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  position: [number, number];
  backgroundColor: "white" | "primary";
}
