import {AnchorHTMLAttributes, DetailedHTMLProps} from "react";

export interface OtherProjectProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  color: "blue" | "green" | "purple";
}
