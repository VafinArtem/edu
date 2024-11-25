import {Option} from "@/interfaces/courses";
import {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {FieldError} from "react-hook-form";

export interface CustomSelectProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  labelName: string;
  showLabel?: boolean;
  options: Option[];
  initialValue?: string | string[];
  isMultiselect?: boolean;
  initialAllValueText?: string;
  clickCb?: (value: string | string[]) => void;
  error?: FieldError;
}
