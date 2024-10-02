import React, {ReactElement} from "react";
import {ButtonArrowProps} from "./button-arrow.props";
import styles from "./button-arrow.module.css";
import clsx from "clsx";
import IconMidRight from "./arrow-mid-right.svg";
import IconBottomRight from "./arrow-bottom-right.svg";
import IconTopRight from "./arrow-top-right.svg";

const ButtonArrow = ({
  className,
  type = "button",
  children,
  iconDirection,
  color,
  ...props
}: ButtonArrowProps): ReactElement | null => {
  return (
    <button type={type} className={clsx(className, styles.button, {
      [styles.primary]: color === "primary",
      [styles.primary2]: color === "primary-2",
    })} {...props}>
      {children}
      {iconDirection === "bottom-right" && <IconBottomRight />}
      {iconDirection === "mid-right" && <IconMidRight />}
      {iconDirection === "top-right" && <IconTopRight />}
    </button>
  );
};

export default ButtonArrow;
