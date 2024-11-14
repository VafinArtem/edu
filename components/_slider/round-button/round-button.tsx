import React, {ReactElement} from "react";
import {RoundButtonProps} from "./round-button.props";
import styles from "./round-button.module.css";
import clsx from "clsx";
import IconArrow from "./arrow.svg";

const RoundButton = ({direction, ...props}: RoundButtonProps): ReactElement | null => {
  return (
    <button
      type={`button`}
      className={clsx(styles.button, {
        [styles.next]: direction === "next",
        [styles.prev]: direction === "prev",
      })}
      aria-label={direction === "next" ? "Следующий слайд" : "Предыдущий слайд"}
      {...props}
    ><IconArrow className={styles.icon} /></button>
  );
};

export default RoundButton;
