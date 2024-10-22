"use client";

import React, {ReactElement, useEffect, useState} from "react";
import {TimerProps} from "./timer.props";
import styles from "./timer.module.css";
import clsx from "clsx";
import {getDeclension} from "@/helpers/helpers";

const Timer = ({
  timestampToEnd,
  className,
  text,
  withoutTextOptions = {
    desktop: false,
    laptop: false,
    tablet: false,
    mobile: false,
  },
}: TimerProps): ReactElement | null => {
  const timeToEnd = timestampToEnd * 1000;
  const now = new Date();

  const [daysInHours, setDaysInHours] = useState(Math.floor((timeToEnd - now.getTime()) / 1000 / 60 / 60 / 24) * 24);
  const [days, setDays] = useState(daysInHours / 24);
  const [hours, setHours] = useState(Math.floor((timeToEnd - now.getTime()) / 1000 / 60 / 60) % 24);
  const [minutes, setMinutes] = useState(Math.floor((timeToEnd - now.getTime()) / 1000 / 60) % 60);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeToEnd = timestampToEnd * 1000;
      const now = new Date();

      setDaysInHours(Math.floor((timeToEnd - now.getTime()) / 1000 / 60 / 60 / 24) * 24);
      setDays(daysInHours / 24);
      setHours(Math.floor((timeToEnd - now.getTime()) / 1000 / 60 / 60) % 24);
      setMinutes(Math.floor((timeToEnd - now.getTime()) / 1000 / 60) % 60);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <p className={clsx(className, styles.wrapper)} suppressHydrationWarning>
			<span className={styles.digits}>
        <span className={styles.digit}>
          <span className={styles.count}>{days}</span>
          <span className={styles.text}>{getDeclension(days, ["день", "дня", "дней"])}</span>
        </span>
        <span className={styles.digit}>
          <span className={styles.count}>{hours}</span>
          <span className={styles.text}>{getDeclension(hours, ["час", "часа", "часов"])}</span>
        </span>
        <span className={styles.digit}>
          <span className={styles.count}>{minutes}</span>
          <span className={styles.text}>{getDeclension(minutes, ["минута", "минуты", "минут"])}</span>
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
