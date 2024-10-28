import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface SelectProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  labelName: string;
}
