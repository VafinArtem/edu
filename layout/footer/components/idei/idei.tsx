import React, {ReactElement} from "react";
import {IdeiProps} from "./idei.props";
import styles from "./idei.module.css";
import IconIdei from "./idei.svg";

const Idei = ({}: IdeiProps): ReactElement | null => {
  return (
    <a href={`https://d-idei.ru`} target="_blank" rel="noopener noreferrer" className={styles.link}>
      <span className={styles.madeIn}>Сайт сделали в&nbsp;Студии IDEI</span>
      <IconIdei width={86} heigth={30} className={styles.icon} />
      <span className={styles.year}>2024</span>
    </a>
  );
};

export default Idei;
