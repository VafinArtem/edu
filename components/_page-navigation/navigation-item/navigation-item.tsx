import React, {ReactElement} from "react";
import {NavigationItemProps} from "./navigation-item.props";
import styles from "./navigation-item.module.css";
import clsx from "clsx";

const NavigationItem = ({isActive, className, children, ...props}: NavigationItemProps): ReactElement | null => {
  return (
    <a {...props} className={clsx(className, styles.item, {
      [styles.active]: isActive,
    })}>
      <span className={styles.text}>
        {children}
      </span>
    </a>
  );
};

export default NavigationItem;
