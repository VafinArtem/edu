import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface FileInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  labelName: string;
  description: string;
  color: "primary" | "primary-2";
  error?: FieldError;
  isValid?: boolean;
}
