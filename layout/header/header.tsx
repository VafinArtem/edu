"use client";

import React, {ReactElement} from "react";
import styles from "./header.module.css";
import {HeaderProps} from "@/layout/header/header.props";
import clsx from "clsx";

const Header = ({...props}: HeaderProps): ReactElement | null => {

  return (
    <header className={clsx(styles.header)}  {...props}>
      Шапка
    </header>
  );
};

export default Header;
