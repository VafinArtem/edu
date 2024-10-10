import React, {ReactElement} from "react";
import {OtherProjectProps} from "./other-project.props";
import styles from "./other-project.module.css";
import clsx from "clsx";

const OtherProject = ({href, color, children}: OtherProjectProps): ReactElement | null => {
  return (
    <li className={styles.wrapper}>
      <a href={href}
        target={"_blank"}
        rel="noopener noreferrer"
        className={clsx(styles.link, {
          [styles.blue]: color === "blue",
          [styles.green]: color === "green",
          [styles.purple]: color === "purple",
        })}>{children}</a>
    </li>
  );
};

export default OtherProject;
