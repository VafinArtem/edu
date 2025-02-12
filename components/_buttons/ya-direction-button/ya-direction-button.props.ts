import {AnchorHTMLAttributes, DetailedHTMLProps} from "react";

export interface YaDirectionButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  position: [string, string];
  backgroundColor: "white" | "primary";
}
