import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./gallery-container.module.css";
import {GalleryContainerProps} from "./gallery-container.props";

const GalleryContainer = ({className, children}: GalleryContainerProps): ReactElement | null => {
  return (
    <div className={clsx(styles.container, className)}>
      {children}
    </div>
  );
};

export default GalleryContainer;
