import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./social-item.module.css";
import {SocialItemProps} from "./social-item.props";
import "./hover.css";

const SocialItem = ({href, icon, className, ...props}: SocialItemProps): ReactElement | null => {
  return (
    <li className={styles.wrapper}>
      <a href={href} className={clsx(styles.link, className)} target="_blank" rel="noopener noreferrer" {...props}>
        {icon(styles.icon)}
      </a>
    </li>
  );
};

export default SocialItem;
