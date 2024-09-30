import React, {ReactElement} from "react";
import {ButtonProps} from "./button.props";
import styles from "./button.module.css";
import clsx from "clsx";

const Button = ({
  className,
  size = "default",
  type = 'button',
  children,
  ...props
}: ButtonProps): ReactElement | null => {
  return (
    <button
      className={clsx(styles.button, className, {
        [styles.wide]: size === "wide",
      })}
      type={type}
      {...props}
    >{children}</button>
  );
};

export default Button;
