import React, {ReactElement} from "react";
import {TimerProps} from "./timer.props";
import styles from "./timer.module.css";
import clsx from "clsx";

const Timer = ({className, text}: TimerProps): ReactElement | null => {
  return (
    <p className={clsx(className, styles.wrapper)}>
			<span className={styles.digits}>
        <span className={styles.digit}>
          <span className={styles.count}>5</span>
          <span className={styles.text}>дней</span>
        </span>
        <span className={styles.digit}>
          <span className={styles.count}>21</span>
          <span className={styles.text}>час</span>
        </span>
        <span className={styles.digit}>
          <span className={styles.count}>16</span>
          <span className={styles.text}>минут</span>
        </span>
      </span>
      <span className={clsx(styles.desc)}>
        {text}
      </span>
		</p>
  );
};

export default Timer;
