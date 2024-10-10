import React, {ReactElement} from "react";
import {SocialItemProps} from "./social-item.props";
import styles from "./social-item.module.css";

const SocialItem = ({href, icon, ...props}: SocialItemProps): ReactElement | null => {
  return (
    <li className={styles.wrapper}>
      <a href={href} className={styles.link} target="_blank" rel="noopener noreferrer" {...props}>
        {icon(styles.icon)}
      </a>
    </li>
  );
};

export default SocialItem;
