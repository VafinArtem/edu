import React, {ReactElement} from "react";
import {PaginationProps} from "./pagination.props";
import styles from "./pagination.module.css";
import clsx from "clsx";
import IconArrows from "./arrows.svg";

const Pagination = ({className}: PaginationProps): ReactElement | null => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <button type={"button"} className={clsx(styles.item, styles.back)}><IconArrows width={16} heigth={16} /></button>
      <button type={"button"} className={clsx(styles.item, styles.active)}>1</button>
      <button type={"button"} className={styles.item}>2</button>
      <button type={"button"} className={styles.item}>3</button>
      <button type={"button"} className={styles.item}>4</button>
      <button type={"button"} className={styles.item}>5</button>
      <button type={"button"} className={styles.item}><IconArrows width={16} heigth={16} /></button>
    </div>
  );
};

export default Pagination;
