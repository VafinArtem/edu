import {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";

export type NavigationLinkProps<C extends BaseButtonComponent = "button"> =
  BaseButtonProps<C> & {}
