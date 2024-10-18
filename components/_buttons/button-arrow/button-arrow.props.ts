import {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";

export type ButtonArrowProps<C extends BaseButtonComponent = "button"> =
  BaseButtonProps<C> & {
  iconDirection: "bottom-right" | "mid-right" | "top-right";
  color: "primary" | "primary-2";
  size?: "middle" | "small";
}
