import React, {ReactElement} from "react";
import {SectionItemProps} from "./section-item.props";
import styles from "./section-item.module.css";
import clsx from "clsx";

const SectionItem = ({className, children}: SectionItemProps): ReactElement | null => {
  return (
    <section className={clsx(className, styles.wrapper)}>
      {children}
    </section>
  );
};

export default SectionItem;
