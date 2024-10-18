import {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import {ExampleItem} from "@/interfaces/speaker";

export type ExampleCardProps<C extends BaseButtonComponent = "button"> =
  BaseButtonProps<C> & {
  example: ExampleItem;
}
