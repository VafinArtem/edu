import React, {ReactElement} from "react";
import {ButtonProps} from "./button.props";
import styles from "./button.module.css";
import clsx from "clsx";
import Link from "next/link";

const Button = ({
  className,
  size = "default",
  isExternal,
  children,
  href,
  ...props
}: ButtonProps): ReactElement | null => {
  const classNameOptions = [styles.button, className, {
    [styles.wide]: size === "wide",
  }];

  return (
    <>
      {isExternal && <a href={href} className={clsx(classNameOptions)} target="_blank"
        rel="noopener noreferrer" {...props}>{children}</a>}
      {!isExternal && <Link className={clsx(classNameOptions)} href={href ?? ``} {...props}>{children}</Link>}
    </>
  );
};

export default Button;
