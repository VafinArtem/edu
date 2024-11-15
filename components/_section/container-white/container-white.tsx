import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./container-white.module.css";
import {ContainerWhiteProps} from "./container-white.props";

const ContainerWhite = ({
  className,
  children,
  withoutMobileBorderRadius,
  ...props
}: ContainerWhiteProps): ReactElement | null => {

  return (
    <div className={clsx(styles.wrapper, className, {
      [styles.disableMobileBr]: withoutMobileBorderRadius,
    })} {...props}>
      {children}
    </div>
  );
};

export default ContainerWhite;
