import clsx from "clsx";
import React, {ReactElement} from "react";
import IconArrow from "./arrow.svg";
import styles from "./button.module.css";
import {ButtonProps} from "./button.props";

const Button = ({direction, background, size, ...props}: ButtonProps): ReactElement | null => {
  return (
    <button
      type={`button`}
      className={clsx(styles.button, {
        [styles.next]: direction === "next",
        [styles.prev]: direction === "prev",
        [styles.bgWhite]: background === "white",
        [styles.bgPrimary]: background === "primary",
        [styles.default]: size === "default",
        [styles.mini]: size === "mini",
      })}
      aria-label={direction === "next" ? "Следующий слайд" : "Предыдущий слайд"}
      {...props}
    ><IconArrow className={styles.icon} /></button>
  );
};

export default Button;
