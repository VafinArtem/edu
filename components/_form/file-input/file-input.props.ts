import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface FileInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  labelName: string;
  description: string;
  error?: FieldError;
  isValid?: boolean;
}
