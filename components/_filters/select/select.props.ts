import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface Option {
  name: string;
  value: number;
  color?: string;
}

export interface SelectProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  labelName: string;
  options: Option[];
}
