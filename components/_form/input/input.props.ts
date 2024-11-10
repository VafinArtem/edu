import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  labelName: string;
  color?: "white" | "gray";
  error?: string;
}
