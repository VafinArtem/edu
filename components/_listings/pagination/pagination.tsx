import React, {ReactElement, useEffect, useState} from "react";
import {PaginationProps} from "./pagination.props";
import styles from "./pagination.module.css";
import clsx from "clsx";
import IconArrows from "./arrows.svg";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

const Pagination = ({pages, currentPage, className}: PaginationProps): ReactElement | null => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const {replace} = useRouter();

  const [page, setPage] = useState(currentPage);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    if (page !== 1) {
      params.set(`page`, `${page}`);
    } else {
      params.delete(`page`);
    }

    replace(`${pathname}?${params.toString()}`, {
      scroll: false,
    });
  }, [page]);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <button type={"button"} className={clsx(styles.item, styles.back)} onClick={() => {
        setPage(page - 1);
      }} disabled={page === 1}><IconArrows width={16} heigth={16} /></button>
      {new Array(pages).fill(1).map((value, index) => <button key={index + 1} type={"button"}
        className={clsx(styles.item, {
          [styles.active]: page === index + 1,
        })}
        onClick={() => {
          setPage(index + 1);
        }}
      >{index + 1}</button>)}
      <button type={"button"} className={styles.item} onClick={() => {
        setPage(page + 1);
      }} disabled={page === pages}><IconArrows width={16} heigth={16} /></button>
    </div>
  );
};

export default Pagination;
