import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./container-primary-color.module.css";
import {ContainerPrimaryColorProps} from "./container-primary-color.props";

const ContainerPrimaryColor = ({
  className,
  children,
  withoutMobileBorderRadius,
  ...props
}: ContainerPrimaryColorProps): ReactElement | null => {

  return (
    <div className={clsx(styles.wrapper, className, {
      [styles.disableMobileBr]: withoutMobileBorderRadius,
    })} {...props}>
      {children}
    </div>
  );
};

export default ContainerPrimaryColor;
