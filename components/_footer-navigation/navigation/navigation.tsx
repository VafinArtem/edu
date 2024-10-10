import React, {ReactElement} from "react";
import {NavigationProps} from "./navigation.props";
import styles from "./navigation.module.css";
import clsx from "clsx";

const Navigation = ({className, children}: NavigationProps): ReactElement | null => {
  return (
    <div className={clsx(className, styles.wrapper)}>
      {children}
    </div>
  );
};

export default Navigation;
