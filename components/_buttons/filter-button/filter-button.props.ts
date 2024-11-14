import {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import {Option} from "@/interfaces/courses";

export type FilterButtonProps<C extends BaseButtonComponent = "button"> =
  BaseButtonProps<C> & {
  option: Option;
};
