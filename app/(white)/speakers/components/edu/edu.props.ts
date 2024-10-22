import {Edu} from "@/interfaces/training";
import {DetailedHTMLProps, HTMLAttributes} from "react";

export interface EduProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  edu: Edu[];
}
