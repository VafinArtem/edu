import React, {ReactElement} from "react";
import {WrapperProps} from "./wrapper.props";
import styles from "./wrapper.module.css";
import clsx from "clsx";

const Wrapper = ({children, className, removeMobileStyles = true, ...props}: WrapperProps): ReactElement | null => {
  return (
    <div className={clsx(className, styles.wrapper, {
      [styles.removeMobileStyles]: removeMobileStyles,
    })} {...props}>
      {children}
    </div>
  );
};

export default Wrapper;
