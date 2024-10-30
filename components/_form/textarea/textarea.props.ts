import {DetailedHTMLProps, TextareaHTMLAttributes} from "react";

export interface TextareaProps extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  labelName: string;
  error?: string;
}
