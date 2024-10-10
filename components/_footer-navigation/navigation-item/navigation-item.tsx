import React, {ReactElement} from "react";
import {NavigationItemProps} from "./navigation-item.props";
import styles from "./navigation-item.module.css";
import Heading from "@/components/_tags/heading/heading";

const NavigationItem = ({title, children}: NavigationItemProps): ReactElement | null => {
  return (
    <div className={styles.wrapper}>
      <Heading tag={`h3`} fontSize={"none"} className={styles.title}>{title}</Heading>
      <ul className={styles.list}>
        {children}
      </ul>
    </div>
  );
};

export default NavigationItem;
