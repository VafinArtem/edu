import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";

export interface RoundButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  direction: "next" | "prev";
}
