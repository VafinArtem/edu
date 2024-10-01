import React, {ReactElement} from "react";
import {SectionCenterHeadProps} from "./section-center-head.props";
import styles from "./section-center-head.module.css";

const SectionCenterHead = ({children}: SectionCenterHeadProps): ReactElement | null => {
  return (
    <div className={styles.wrapper}>
			{children}
    </div>
  );
};

export default SectionCenterHead;
