import React, {ReactElement} from "react";
import {TimerProps} from "./timer.props";
import styles from "./timer.module.css";
import clsx from "clsx";

const Timer = ({
  className, text, withoutTextOptions = {
    desktop: false,
    laptop: false,
    tablet: false,
    mobile: false,
  },
}: TimerProps): ReactElement | null => {
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
      {text && <span className={clsx(styles.desc, {
        [styles.hiddenDesktop]: withoutTextOptions.desktop,
        [styles.hiddenLaptop]: withoutTextOptions.laptop,
        [styles.hiddenTablet]: withoutTextOptions.tablet,
        [styles.hiddenMobile]: withoutTextOptions.mobile,
      })}>
        {text}
      </span>}
    </p>
  );
};

export default Timer;
