"use client";

import React, {ReactElement} from "react";
import {NavigationItemProps} from "./navigation-item.props";
import styles from "./navigation-item.module.css";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import Link from "next/link";

const NavigationItem = ({href, children}: NavigationItemProps): ReactElement | null => {
  const pathname = usePathname();

  return (
    <li className={clsx(styles.item)}>
      {pathname === href ?
        <span className={clsx(styles.link, styles.active)}>{children}</span> :
        <Link className={clsx(styles.link)} href={href}>{children}</Link>
      }
    </li>
  );
};

export default NavigationItem;
