"use client";

import clsx from "clsx";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {ReactElement} from "react";
import styles from "./navigation-item.module.css";
import {NavigationItemProps} from "./navigation-item.props";

const NavigationItem = ({href, className, color = "black", children}: NavigationItemProps): ReactElement | null => {
  const pathname = usePathname();

  return (
    <li className={clsx(styles.item, className, {
      [styles.white]: color === "white",
    })}>
      {pathname === href ?
        <span className={clsx(styles.link, styles.active)}>{children}</span> :
        <Link className={clsx(styles.link)} href={href}>{children}</Link>
      }
    </li>
  );
};

export default NavigationItem;
