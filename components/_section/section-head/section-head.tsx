import React, {ReactElement} from "react";
import {SectionHeadProps} from "./section-head.props";
import styles from "./section-head.module.css";
import clsx from "clsx";

const SectionHead = ({children, className}: SectionHeadProps): ReactElement | null => {
  return (
    <div className={clsx(styles.wrapper, className)}>{children}</div>
  );
};

export default SectionHead;
