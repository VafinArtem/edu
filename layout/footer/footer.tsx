"use client";

import Logo from "@/components/_common/logo/logo";
import NavigationItem from "@/components/_footer-navigation/navigation-item/navigation-item";
import NavigationLink from "@/components/_footer-navigation/navigation-link/navigation-link";
import Navigation from "@/components/_footer-navigation/navigation/navigation";
import SocialItem from "@/components/_social/social-item/social-item";
import Social from "@/components/_social/social/social";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Route} from "@/helpers/route";
import Idei from "@/layout/footer/components/idei/idei";
import OtherProject from "@/layout/footer/components/other-project/other-project";
import OtherProjects from "@/layout/footer/components/other-projects/other-projects";
import Payment from "@/layout/footer/components/payment/payment";
import {FooterProps} from "@/layout/footer/footer.props";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, {ReactElement} from "react";
import IconCopyright from "./copyright.svg";
import styles from "./footer.module.css";
import IconVK from "./vk.svg";
import IconYouTube from "./youtube.svg";

const Footer = ({...props}: FooterProps): ReactElement | null => {

  return (
    <footer className={clsx(styles.footer)}  {...props}>
      <div className={clsx(styles.wrapper, `container`)}>
        <div className={styles.top}>
          <Logo className={styles.logo} position={"footer"} color={"white"} />
          <Paragraph fontSize={"none"} className={styles.license}><Image src={`/img/components/footer/eagle.png`}
            width={56} height={61} quality={100} className={styles.eagle}
            alt={``} /><a href={`/pdf/license.pdf`} target={"_blank"}
            className={styles.licenseText}><span>Лицензия </span>
            <span>№Л035-01271-78/00637355</span></a></Paragraph>
          <Navigation className={styles.navigation}>
            {/*<NavigationItem title={`Amrita`}>*/}
            {/*  <NavigationLink component={Link} href={Route.COURSES}>О компании</NavigationLink>*/}
            {/*  <NavigationLink component={Link} href={Route.COURSES}>Новости</NavigationLink>*/}
            {/*  <NavigationLink component={Link} href={Route.CONTACTS}>Контакты</NavigationLink>*/}
            {/*</NavigationItem>*/}
            <NavigationItem title={`Направления`}>
              <NavigationLink component={Link}
                href={`${Route.COURSES}/category-stomatologya`}>Стоматология</NavigationLink>
              {/*<NavigationLink component={Link} href={Route.COURSES}>Косметология</NavigationLink>*/}
              {/*<NavigationLink component={Link}*/}
              {/*  href={`${Route.COURSES}/category-veterenarya`}>Ветеринария</NavigationLink>*/}
            </NavigationItem>
            {/*<NavigationItem title={`Программа`}>*/}
            {/*  <NavigationLink component={Link} href={Route.COURSES}>Лекции</NavigationLink>*/}
            {/*  <NavigationLink component={Link} href={Route.COURSES}>Вебинары</NavigationLink>*/}
            {/*  <NavigationLink component={Link} href={Route.COURSES}>Курсы</NavigationLink>*/}
            {/*</NavigationItem>*/}
            <NavigationItem title={`Дополнительно`}>
              <NavigationLink component={`a`} href={`/pdf/personal_data_processing_policy_1.pdf`} target={`_blank`}>Политика
                конфиденциальности</NavigationLink>
              {/*<NavigationLink component={Link} href={Route.COURSES}>Стать преподавателем</NavigationLink>*/}
              {/*<NavigationLink component={Link} href={Route.COURSES}>Акции и скидки</NavigationLink>*/}
              {/*<NavigationLink component={Link} href={Route.COURSES}>Договор оферты</NavigationLink>*/}
            </NavigationItem>
          </Navigation>
          <a href="tel:+79312011400" className={styles.phone}>+7 (931) 201-14-00</a>
          <Social className={styles.social}>
            <SocialItem
              href={`https://www.youtube.com/channel/UCsWR0CGP1OLaQTFA0iEg61Q`}
              aria-label={`YouTube`}
              className={`youtubeIcon`}
              icon={(className: string) => <IconYouTube className={className} width={40}
                height={40} />}
            />
            <SocialItem
              href={`https://vk.com/amritadent`}
              aria-label={`Вконтакте`}
              className={`vkIcon`}
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
          <Paragraph fontSize={"none"} fontWeight={"light"} className={styles.copyright}>
            <IconCopyright width={30} height={30} className={styles.copyrightIcon} />
            <span className={styles.copyrightText}><span>2004 — {new Date().getFullYear()}</span><span>Учебный
            центр Амрита</span></span>
          </Paragraph>

          <Payment className={styles.payment} />

          <Idei />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
