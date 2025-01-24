import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./button.module.css";
import {ButtonProps} from "./button.props";

const Button = <C extends BaseButtonComponent = "button">({
  className,
  size = "default",
  color = "primary",
  isDisabled,
  ...props
}: ButtonProps<C>): ReactElement | null => {
  return (
    <BaseButton<C> className={clsx(styles.button, className, {
      [styles.wide]: size === "wide",
      [styles.small]: size === "small",
      [styles.primaryLight]: color === "primary-light",
      [styles.primary2]: color === "primary-2",
      [styles.disabled]: isDisabled,
    })} {...(props as BaseButtonProps<C>)} />
  );
};

export default Button;
