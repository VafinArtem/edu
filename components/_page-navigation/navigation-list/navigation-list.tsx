import React, {ReactElement} from "react";
import {NavigationListProps} from "./navigation-list.props";
import styles from "./navigation-list.module.css";
import clsx from "clsx";

const NavigationList = ({className, children}: NavigationListProps): ReactElement | null => {

  return (
    <div className={clsx(styles.wrapper, className)}>
      {children}
    </div>
  );
};

export default NavigationList;
