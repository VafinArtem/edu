import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ContainerPrimaryColorProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  withoutMobileBorderRadius?: boolean;
}
