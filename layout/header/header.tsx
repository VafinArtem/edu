"use client";

import Logo from "@/components/_common/logo/logo";
import NavigationItem from "@/components/_navigation/navigation-item/navigation-item";
import Navigation from "@/components/_navigation/navigation/navigation";
import {Route} from "@/helpers/route";
import {Button} from "@/layout/header/components/button/button";
import Catalog from "@/layout/header/components/catalog/catalog";
import {HeaderProps} from "@/layout/header/header.props";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./header.module.css";
import IconPhone from "./phone.svg";

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
            <Logo position={"header"} color={type === "blur" ? "white" : "black"} className={styles.logo} />
            <Catalog className={styles.catalog} color={type === "blur" ? "white" : "black"}
              href={Route.COURSES}>Курсы</Catalog>
          </div>
          <Navigation className={styles.navigation}>
            {/*<NavigationItem color={type === "blur" ? "white" : "black"} href={Route.NEWS}>Новости</NavigationItem>*/}
            {/*<NavigationItem color={type === "blur" ? "white" : "black"} href={Route.REVIEWS}>Отзывы</NavigationItem>*/}
            <NavigationItem color={type === "blur" ? "white" : "black"}
              href={Route.SPEAKERS} className={styles.navigationLink}>Преподаватели</NavigationItem>
            <NavigationItem color={type === "blur" ? "white" : "black"} href={Route.CONTACTS}
              className={styles.navigationLink}>Контакты</NavigationItem>
          </Navigation>
          <div className={styles.user}>
            <Button color={type === "blur" ? "white" : "gray"} component={`a`} href={`tel:+79312011400`}><IconPhone
              className={styles.buttonIcon} /><span
              className={styles.buttonText}>Связаться</span></Button>
            {/*<Button color={type === "blur" ? "white" : "gray"} component={Link} href={Route.PROFILE}><IconMortarboard*/}
            {/*  className={styles.buttonIcon} /><span*/}
            {/*  className={styles.buttonText}>Кабинет</span></Button>*/}
            {/*<Button color={"primary"} aria-label={`Показать меню`}><IconBurger /></Button>*/}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
