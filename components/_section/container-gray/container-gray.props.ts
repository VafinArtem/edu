import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface ContainerGrayProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  withoutMobileBorderRadius?: boolean;
}
