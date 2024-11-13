import React, {ReactElement} from "react";
import {usePathname} from "next/navigation";
import {CatalogProps} from "./catalog.props";
import styles from "./catalog.module.css";
import clsx from "clsx";
import IconArrow from "./arrow.svg";
import Link from "next/link";

const Catalog = ({href, className, color = "black", children}: CatalogProps): ReactElement | null => {
  const pathname = usePathname();

  return (
    <>
      {pathname === href ?
        <p className={clsx(styles.link, styles.active, className, {
          [styles.white]: color === "white",
        })}>{children} <IconArrow /></p> :
        <Link className={clsx(styles.link, className, {
          [styles.white]: color === "white",
        })} href={href}>{children}<IconArrow /></Link>
      }
    </>
  );
};

export default Catalog;
