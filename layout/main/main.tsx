import React, {ReactElement} from "react";
import clsx from "clsx";
import {MainProps} from "@/layout/main/main.props";
import styles from './main.module.css';

const Main = ({children, ...props}: MainProps): ReactElement | null => {
  return (
    <main className={clsx(styles.main)} {...props}>
      {children}
    </main>
  );
};

export default Main;
