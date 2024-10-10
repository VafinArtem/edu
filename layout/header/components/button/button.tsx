import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import clsx from "clsx";
import styles from "./button.module.css";
import {ButtonProps} from "@/layout/header/components/button/button.props";

function Button<C extends BaseButtonComponent = "button">({
  className,
  color,
  ...props
}: ButtonProps<C>) {
  return (
    <BaseButton<C> className={clsx(styles.button, className, {
      [styles.primary]: color === "primary",
      [styles.gray]: color === "gray",
    })} {...(props as BaseButtonProps<C>)} />
  );
}

export {Button};
