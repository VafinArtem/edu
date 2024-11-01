import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {Option} from "@/interfaces/courses";

export interface SelectProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  labelName: string;
  options: Option[];
}
