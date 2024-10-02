import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface ButtonArrowProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  iconDirection: "bottom-right" | "mid-right" | "top-right";
  color: "primary" | "primary-2";
}
