import React, {ReactElement} from "react";
import Link from "next/link";
import {LinkArrowProps} from "./link-arrow.props";
import styles from "./link-arrow.module.css";
import clsx from "clsx";
import IconMidRight from "./arrow-mid-right.svg";
import IconBottomRight from "./arrow-bottom-right.svg";
import IconTopRight from "./arrow-top-right.svg";

const LinkArrow = ({
  className,
  href,
  children,
  iconDirection,
  color,
  withBackground,
  isExternal,
  size = "medium",
  borderRadius = "medium",
  ...props
}: LinkArrowProps): ReactElement | null => {
  const classNameOptions = [className, styles.button, {
    [styles.bg]: withBackground,
    [styles.primary]: color === "primary",
    [styles.primary2]: color === "primary-2",
    [styles.small]: size === "small",
    [styles.medium]: size === "medium",
    [styles.brSmall]: borderRadius === "small",
    [styles.brMedium]: borderRadius === "medium",
  }];

  return (
    <>
      {isExternal && <a href={href} className={clsx(classNameOptions)} target="_blank"
        rel="noopener noreferrer" {...props}>{children}
        {iconDirection === "bottom-right" && <IconBottomRight />}
        {iconDirection === "mid-right" && <IconMidRight />}
        {iconDirection === "top-right" && <IconTopRight />}</a>}

      {!isExternal && <Link className={clsx(classNameOptions)} href={href ?? ``} {...props}>{children}
        {iconDirection === "bottom-right" && <IconBottomRight />}
        {iconDirection === "mid-right" && <IconMidRight />}
        {iconDirection === "top-right" && <IconTopRight />}</Link>}
    </>
  );
};

export default LinkArrow;
