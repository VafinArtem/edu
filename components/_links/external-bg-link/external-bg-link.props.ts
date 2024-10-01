import {AnchorHTMLAttributes, DetailedHTMLProps} from "react";

export interface ExternalBgLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  isExternal?: boolean;
}
