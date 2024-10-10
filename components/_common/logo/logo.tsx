"use client";

import React, {ReactElement} from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";
import {LogoProps} from "./logo.props";
import styles from "./logo.module.css";
import IconLogo from "./logo.svg";
import IconLogoMini from "./logo-tooth.svg";
import {Route} from "@/helpers/route";

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
          <IconLogoMini className={clsx(className, styles.logoMini, classNameOptions)} />
        </> :
        <Link className={clsx(className, styles.link)} href={Route.MAIN}>
          <IconLogo width={142} heigth={42} className={clsx(classNameOptions)} />
          <IconLogoMini className={clsx(classNameOptions, styles.logoMini)} />
        </Link>}
    </React.Fragment>
  );
};

export default Logo;
