import React, {ReactElement} from "react";
import {NavigationProps} from "./navigation.props";
import styles from "./navigation.module.css";
import clsx from "clsx";

const Navigation = ({children, className, ...props}: NavigationProps): ReactElement | null => {
  return (
    <nav className={clsx(className, styles.nav)} {...props}>
      <ul className={styles.list}>
        {children}
      </ul>
    </nav>
  );
};

export default Navigation;
