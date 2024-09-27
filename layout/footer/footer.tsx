"use client";

import React, {ReactElement} from "react";
import styles from "./footer.module.css";
import {FooterProps} from "@/layout/footer/footer.props";
import clsx from "clsx";

const Footer = ({...props}: FooterProps): ReactElement | null => {

  return (
    <footer className={clsx(styles.footer)}  {...props}>
      Подвал
    </footer>
  );
};

export default Footer;
