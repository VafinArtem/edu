import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./theme-list.module.css";
import {ThemeListProps} from "./theme-list.props";

const ThemeList = ({title, themes, dotColor}: ThemeListProps): ReactElement | null => {
  return (
    <div className={styles.wrapper}>
      <Paragraph fontWeight={"light"}>{title}</Paragraph>
      <ul className={clsx(styles.list, {
        [styles.practice]: dotColor === "practice",
        [styles.theory]: dotColor === "theory",
      })}>
        {themes.map((item, index) => (<li className={styles.item} key={index}>{item}</li>))}
      </ul>
    </div>
  );
};

export default ThemeList;
