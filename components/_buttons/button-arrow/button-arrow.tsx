import React, {ReactElement} from "react";
import {ButtonArrowProps} from "./button-arrow.props";
import styles from "./button-arrow.module.css";
import clsx from "clsx";
import IconMidRight from "./arrow-mid-right.svg";
import IconBottomRight from "./arrow-bottom-right.svg";
import IconTopRight from "./arrow-top-right.svg";
import BaseButton, {BaseButtonComponent, BaseButtonProps} from "@/components/_buttons/base-button/base-button";

const ButtonArrow = <C extends BaseButtonComponent = "button">({
  className,
  children,
  iconDirection,
  color,
  size = "middle",
  ...props
}: ButtonArrowProps<C>): ReactElement | null => {
  return (
    <BaseButton<C> className={clsx(className, styles.button, {
      [styles.primary]: color === "primary",
      [styles.primary2]: color === "primary-2",
      [styles.middle]: size === "middle",
      [styles.small]: size === "small",
    })} {...(props as BaseButtonProps<C>)}>
      {children}
      {iconDirection === "bottom-right" && <IconBottomRight />}
      {iconDirection === "mid-right" && <IconMidRight />}
      {iconDirection === "top-right" && <IconTopRight />}
    </BaseButton>
  );
};

export default ButtonArrow;
