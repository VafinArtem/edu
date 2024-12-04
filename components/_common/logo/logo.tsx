"use client";

import {Route} from "@/helpers/route";
import clsx from "clsx";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React, {ReactElement} from "react";
import styles from "./logo.module.css";
import {LogoProps} from "./logo.props";
import IconLogo from "./logo.svg";

const Logo = ({className, position, iconClassName, color = "black"}: LogoProps): ReactElement | null => {
  const pathname = usePathname();

  const classNameOptions = [styles.icon, {
    [styles.black]: color === "black",
    [styles.white]: color === "white",
    [styles.header]: position === "header",
    [styles.footer]: position === "footer",
  }, iconClassName];

  return (
    <React.Fragment>
      {pathname === Route.MAIN ?
        <>
          <IconLogo className={clsx(className, classNameOptions)} />
        </> :
        <Link className={clsx(className, styles.link)} href={Route.MAIN}>
          <IconLogo width={142} heigth={42} className={clsx(classNameOptions)} />
        </Link>}
    </React.Fragment>
  );
};

export default Logo;
