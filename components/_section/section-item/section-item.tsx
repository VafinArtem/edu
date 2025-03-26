import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./section-item.module.css";
import {SectionItemProps} from "./section-item.props";

const SectionItem = ({className, children, gap = "default", ...props}: SectionItemProps): ReactElement | null => {
  return (
    <section className={clsx(className, styles.wrapper, {
      [styles.gap20]: gap === "20",
      [styles.gapDefault]: gap === "default",
    })} {...props}>
      {children}
    </section>
  );
};

export default SectionItem;
