import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";
import clsx from "clsx";
import React, {ReactElement} from "react";
import IconBottomRight from "./arrow-bottom-right.svg";
import IconMidRight from "./arrow-mid-right.svg";
import IconTopRight from "./arrow-top-right.svg";
import styles from "./button-arrow.module.css";
import {ButtonArrowProps} from "./button-arrow.props";

const ButtonArrow = <C extends BaseButtonComponent = "button">({
  className,
  children,
  iconDirection,
  color,
  withBackground,
  size = "medium",
  borderRadius = "medium",
  borderColor,
  ...props
}: ButtonArrowProps<C>): ReactElement | null => {
  return (
    <BaseButton<C> className={clsx(className, styles.button, {
      [styles.bg]: withBackground,
      [styles.primary]: color === "primary",
      [styles.primary2]: color === "primary-2",
      [styles.small]: size === "small",
      [styles.medium]: size === "medium",
      [styles.brSmall]: borderRadius === "small",
      [styles.brMedium]: borderRadius === "medium",
      [styles.lightBorder]: borderColor === "light",
      [styles.defaultBorder]: borderColor === "default",
    })} {...(props as BaseButtonProps<C>)}>
      {children}
      {iconDirection === "bottom-right" && <IconBottomRight />}
      {iconDirection === "mid-right" && <IconMidRight />}
      {iconDirection === "top-right" && <IconTopRight />}
    </BaseButton>
  );
};

export default ButtonArrow;
