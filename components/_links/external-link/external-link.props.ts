import {AnchorHTMLAttributes, DetailedHTMLProps} from "react";

export interface ExternalLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  isExternal?: boolean;
}
