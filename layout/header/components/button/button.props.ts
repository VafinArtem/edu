import {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";

export type ButtonProps<C extends BaseButtonComponent = "button"> =
  BaseButtonProps<C> & {
  color: "gray" | "primary" | "white";
}
