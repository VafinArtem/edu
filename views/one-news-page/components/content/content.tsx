import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./content.module.css";
import {ContentProps} from "./content.props";

const Content = ({className, children}: ContentProps): ReactElement | null => {
  return (
    <div className={clsx(className, styles.wrapper)}>
      {children}
    </div>
  );
};

export default Content;
