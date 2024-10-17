import {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";

export type ExternalLinkProps<C extends BaseButtonComponent = "button"> =
  BaseButtonProps<C> & {
  color?: "white" | "primary";
}
