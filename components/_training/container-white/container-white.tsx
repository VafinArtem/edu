import React, {ReactElement} from "react";
import {ContainerWhiteProps} from "./container-white.props";
import styles from "./container-white.module.css";
import clsx from "clsx";

const ContainerWhite = ({className, children, ...props}: ContainerWhiteProps): ReactElement | null => {

  return (
    <div className={clsx(styles.wrapper, className)} {...props}>
      {children}
    </div>
  );
};

export default ContainerWhite;
