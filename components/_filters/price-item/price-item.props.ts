import {DetailedHTMLProps, InputHTMLAttributes} from "react";

export interface PriceItemProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  labelName: string;
}
