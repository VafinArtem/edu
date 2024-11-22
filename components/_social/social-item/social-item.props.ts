import {AnchorHTMLAttributes, DetailedHTMLProps, ReactElement} from "react";

export interface SocialItemProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  icon: (className: string) => ReactElement;
  iconClassName?: string;
}
