import React, {ReactElement} from "react";
import {ButtonProps} from "./button.props";
import styles from "./button.module.css";
import clsx from "clsx";
import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";

const Button = <C extends BaseButtonComponent = "button">({
  className,
  size = "default",
  color = "primary",
  ...props
}: ButtonProps<C>): ReactElement | null => {
  return (
    <BaseButton<C> className={clsx(styles.button, className, {
      [styles.wide]: size === "wide",
      [styles.primaryLight]: color === "primary-light",
    })} {...(props as BaseButtonProps<C>)} />
  );
};

export default Button;
