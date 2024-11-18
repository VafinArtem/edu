import BiggestRoundButton from "@/components/_buttons/biggest-round-button/biggest-round-button";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Route} from "@/helpers/route";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, {ReactElement} from "react";
import styles from "./footer.module.css";
import {FooterProps} from "./footer.props";

const Footer = ({className}: FooterProps): ReactElement | null => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.left}>
        <Image src={`/img/main-page/footer/img.png`} alt={``} width={285} height={285} loading={"lazy"} quality={95}
          className={styles.image} />
        <BiggestRoundButton component={Link} href={Route.COURSES} className={styles.link}>Смотреть<br /> все
          курсы</BiggestRoundButton>
      </div>
      <div className={styles.right}>
        <Heading tag={`h2`} className={styles.title}>Разнообразный выбор лекций, мастер-классов и&nbsp;вебинаров <span
          className={styles.tag}>Каждый месяц</span></Heading>
        <Paragraph>Для опытных и&nbsp;начинающих медицинских специалистов</Paragraph>
      </div>
    </div>
  );
};

export default Footer;
