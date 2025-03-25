import clsx from "clsx";
import Link from "next/link";
import {usePathname, useSearchParams} from "next/navigation";
import React, {ReactElement, useEffect, useState} from "react";
import IconArrows from "./arrows.svg";
import styles from "./pagination.module.css";
import {PaginationProps} from "./pagination.props";

const Pagination = ({pages, className}: PaginationProps): ReactElement | null => {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const getLinkHref = (page: number): string => {
    const params = new URLSearchParams(searchParams);
    params.set(`page`, `${page}`);
    return `${pathname}?${params.toString()}`;
  };

  const [page, setPage] = useState(searchParams.get("page") ? +searchParams.get("page")! : 1);

  useEffect(() => {
    setPage(searchParams.get("page") ? +searchParams.get("page")! : 1);
  }, [searchParams]);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <Link
        scroll={false}
        href={page === 1 ? "" : getLinkHref(page - 1)}
        className={clsx(styles.item, styles.back, {
          [styles.disabled]: page === 1,
        })}
        onClick={() => {
          setPage(page - 1);
        }}
      ><IconArrows width={16} heigth={16} /></Link>
      {new Array(pages).fill(1).map((value, index) => <Link scroll={false}
        href={page !== index + 1 ? getLinkHref(index + 1) : ""}
        key={index + 1}
        className={clsx(styles.item, {
          [styles.active]: page === index + 1,
        })}
      >{index + 1}</Link>)}
      <Link scroll={false} href={page === pages ? "" : getLinkHref(page + 1)} className={clsx(styles.item, {
        [styles.disabled]: page === pages,
      })}><IconArrows
        width={16}
        heigth={16} /></Link>
    </div>
  );
};

export default Pagination;
