import React, {ReactElement} from "react";
import {PaginationProps} from "./pagination.props";
import styles from "./pagination.module.css";
import clsx from "clsx";
import Link from "next/link";
import {Route} from "@/helpers/route";

const Pagination = ({className, pagination}: PaginationProps): ReactElement | null => {
  return (
    <div className={clsx(className, styles.wrapper)}>
      <Link href={Route.MAIN} className={styles.link}>Главная</Link>
      {pagination.map((item, index) => {
        const key = `${item.name}-${index}`;
        if (item.link) {
          return (<Link key={key} href={item.link} className={styles.link}><span
            className={styles.text}>{item.name}</span></Link>);
        }

        return (<p key={key} className={styles.link}><span className={styles.text}>{item.name}</span></p>);
      })}
    </div>
  );
};

export default Pagination;
