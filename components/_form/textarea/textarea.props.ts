import {DetailedHTMLProps, TextareaHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  labelName: string;
  color?: "white" | "gray";
  error?: FieldError;
  isValid?: boolean;
}
