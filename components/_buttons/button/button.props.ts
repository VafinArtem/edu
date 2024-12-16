import {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";

export type ButtonProps<C extends BaseButtonComponent = "button"> =
  BaseButtonProps<C> & {
  size?: "default" | "wide" | "small";
  color?: "primary" | "primary-light" | "primary-2";
}
