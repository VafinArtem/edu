import React, {ReactElement} from "react";
import {PaginationProps} from "./pagination.props";
import styles from "./pagination.module.css";
import clsx from "clsx";
import IconArrows from "./arrows.svg";

const Pagination = ({pages, currentPage, className}: PaginationProps): ReactElement | null => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <button type={"button"} className={clsx(styles.item, styles.back)}><IconArrows width={16} heigth={16} /></button>
      {new Array(pages).fill(1).map((value, index) => <button key={index + 1} type={"button"}
        className={clsx(styles.item, {
          [styles.active]: currentPage === index + 1,
        })}>{index + 1}</button>)}
      <button type={"button"} className={styles.item}><IconArrows width={16} heigth={16} /></button>
    </div>
  );
};

export default Pagination;
