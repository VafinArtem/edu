import {Edu} from "@/interfaces/course";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface EduProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  edu: Edu[];
}
