import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {Option} from "@/interfaces/courses";

export interface SelectProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  labelName: string;
  options: Option[];
  initialValue?: string | string[];
  isMultiselect?: boolean;
  clickCb?: (value: string | string[]) => void;
}
