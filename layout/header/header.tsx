"use client";

import React, {ReactElement} from "react";
import Link from "next/link";
import clsx from "clsx";
import {HeaderProps} from "@/layout/header/header.props";
import styles from "./header.module.css";
import Logo from "@/components/_common/logo/logo";
import Navigation from "@/components/_navigation/navigation/navigation";
import NavigationItem from "@/components/_navigation/navigation-item/navigation-item";
import {Route} from "@/helpers/route";
import {Button} from "@/layout/header/components/button/button";
import IconPhone from "./phone.svg";
import IconMortarboard from "./mortarboard.svg";
import IconBurger from "./burger.svg";
import Catalog from "@/layout/header/components/catalog/catalog";

const Header = ({type = "white", ...props}: HeaderProps): ReactElement | null => {

  return (
    <header className={clsx(styles.header, {
      [styles.white]: type === "white",
      [styles.gray]: type === "gray",
      [styles.blur]: type === "blur",
    })}  {...props}>
      <div className={clsx(styles.container)}>
        <div className={clsx(styles.wrapper)}>
          <div className={styles.left}>
            <Logo position={"header"} color={"white"} className={styles.logo} />
            <Catalog className={styles.catalog} color={"white"} href={Route.COURSES}>Курсы</Catalog>
          </div>
          <Navigation className={styles.navigation}>
            <NavigationItem color={"white"} href={Route.NEWS}>Новости</NavigationItem>
            <NavigationItem color={"white"} href={Route.REVIEWS}>Отзывы</NavigationItem>
            <NavigationItem color={"white"} href={Route.CONTACTS}>Контакты</NavigationItem>
          </Navigation>
          <div className={styles.user}>
            <Button color={"white"} component={`a`} href={`tel:+79312011400`}><IconPhone
              className={styles.buttonIcon} /><span
              className={styles.buttonText}>Связаться</span></Button>
            <Button color={"white"} component={Link} href={Route.PROFILE}><IconMortarboard
              className={styles.buttonIcon} /><span
              className={styles.buttonText}>Кабинет</span></Button>
            <Button color={"primary"} aria-label={`Показать меню`}><IconBurger /></Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
