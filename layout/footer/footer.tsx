"use client";

import React, {ReactElement} from "react";
import styles from "./footer.module.css";
import {FooterProps} from "@/layout/footer/footer.props";
import clsx from "clsx";
import Logo from "@/components/_common/logo/logo";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import Navigation from "@/components/_footer-navigation/navigation/navigation";
import NavigationItem from "@/components/_footer-navigation/navigation-item/navigation-item";
import {NavigationLink} from "@/components/_footer-navigation/navigation-link/navigation-link";
import Link from "next/link";
import {Route} from "@/helpers/route";
import Social from "@/components/_social/social/social";
import SocialItem from "@/components/_social/social-item/social-item";
import IconYouTube from "./youtube.svg";
import IconVK from "./vk.svg";
import OtherProjects from "@/layout/footer/components/other-projects/other-projects";
import OtherProject from "@/layout/footer/components/other-project/other-project";
import Image from "next/image";

const Footer = ({...props}: FooterProps): ReactElement | null => {

  return (
    <footer className={clsx(styles.footer)}  {...props}>
      <div className={clsx(styles.wrapper, `container`)}>
        <div className={styles.top}>
          <Logo className={styles.logo} position={"footer"} color={"white"} />
          <Paragraph fontSize={"none"} className={styles.license}><Image src={`/img/components/footer/eagle.png`}
            width={56} height={61} quality={100} className={styles.eagle}
            alt={``} /><span className={styles.licenseText}><span>Лицензия </span>
            <span>№Л035-01271-78/00637355</span></span></Paragraph>
          <Navigation className={styles.navigation}>
            <NavigationItem title={`Amrita`}>
              <NavigationLink component={Link} href={Route.TRAINING}>О компании</NavigationLink>
              <NavigationLink component={Link} href={Route.TRAINING}>Новости</NavigationLink>
              <NavigationLink component={Link} href={Route.TRAINING}>Контакты</NavigationLink>
            </NavigationItem>
            <NavigationItem title={`Направления`}>
              <NavigationLink component={Link} href={Route.TRAINING}>Стоматология</NavigationLink>
              <NavigationLink component={Link} href={Route.TRAINING}>Косметология</NavigationLink>
              <NavigationLink component={Link} href={Route.TRAINING}>Ветеринария</NavigationLink>
            </NavigationItem>
            <NavigationItem title={`Программа`}>
              <NavigationLink component={Link} href={Route.TRAINING}>Лекции</NavigationLink>
              <NavigationLink component={Link} href={Route.TRAINING}>Вебинары</NavigationLink>
              <NavigationLink component={Link} href={Route.TRAINING}>Курсы</NavigationLink>
            </NavigationItem>
            <NavigationItem title={`Дополнительно`}>
              <NavigationLink component={Link} href={Route.TRAINING}>Стать преподавателем</NavigationLink>
              <NavigationLink component={Link} href={Route.TRAINING}>Акции и скидки</NavigationLink>
              <NavigationLink component={Link} href={Route.TRAINING}>Договор оферты</NavigationLink>
            </NavigationItem>
          </Navigation>
          <a href="tel:+79312011400" className={styles.phone}>+7 (931) 201-14-00</a>
          <Social className={styles.social}>
            <SocialItem
              href={`https://www.youtube.com/channel/UCsWR0CGP1OLaQTFA0iEg61Q`}
              aria-label={`YouTube`}
              icon={(className: string) => <IconYouTube className={className} width={40} height={40} />}
            />
            <SocialItem
              href={`https://vk.com/amritadent`}
              aria-label={`Вконтакте`}
              icon={(className: string) => <IconVK className={className} width={40} height={40} />}
            />
          </Social>
          <OtherProjects className={styles.otherProjects}>
            <OtherProject href={`https://amrita-dent.ru`} color={"blue"}>Интернет-магазин</OtherProject>
            <OtherProject href={`https://service.amrita-dent.ru/`} color={"green"}>Сервисный центр</OtherProject>
            <OtherProject href={`https://tezis-shop.ru/`} color={"purple"}>Медицинская одежда</OtherProject>
          </OtherProjects>
        </div>
        <div className={styles.bottom}>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
