import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./container-gray.module.css";
import {ContainerGrayProps} from "./container-gray.props";

const ContainerGray = ({
  className,
  children,
  withoutMobileBorderRadius,
  ...props
}: ContainerGrayProps): ReactElement | null => {

  return (
    <div className={clsx(styles.wrapper, className, {
      [styles.disableMobileBr]: withoutMobileBorderRadius,
    })} {...props}>
      {children}
    </div>
  );
};

export default ContainerGray;
