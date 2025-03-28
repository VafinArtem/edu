import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  labelName: string;
  color?: "white" | "gray";
  inputSize?: "default" | "small";
  error?: FieldError;
  isValid?: boolean;
  inputClassName?: string;
}
