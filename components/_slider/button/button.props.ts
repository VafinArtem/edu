import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  direction: "next" | "prev";
  background: "white" | "primary";
  size: "default" | "mini";
}
