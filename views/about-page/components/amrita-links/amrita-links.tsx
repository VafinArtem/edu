import SectionCenterHead from "@/components/_section/section-center-head/section-center-head";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import Image from "next/image";
import React, {ReactElement} from "react";
import styles from "./amrita-links.module.css";
import {AmritaLinksProps} from "./amrita-links.props";
import IconArrow from "./arrow.svg";

const AmritaLinks = ({className}: AmritaLinksProps): ReactElement | null => {

  return (
    <SectionItem className={className}>
      <SectionCenterHead>
        <Heading tag={"h2"}>Amrita — группа компаний</Heading>
      </SectionCenterHead>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Image className={styles.image} src={"/img/about-page/amrita-links/amrita.png"} alt={""} width={560}
            height={196} />
          <div className={styles.content}>
            <Paragraph fontSize={"none"} fontWeight={"medium"} className={clsx(styles.title, styles.blue)}>Интернет-магазин
              оборудования
              и&nbsp;материалов</Paragraph>
            <Paragraph className={styles.title}>Большой выбор стоматологических товаров разного назначения.</Paragraph>
          </div>
          <a href={"https://amrita-dent.ru"} target={"_blank"} rel={"noreferrer"}
            className={clsx(styles.link, styles.blue)}>Перейти в
            магазин <IconArrow width={16} height={16} /></a>
        </li>
        <li className={styles.item}>
          <Image className={styles.image} src={"/img/about-page/amrita-links/tezis.png"} alt={""} width={560}
            height={196} />
          <div className={styles.content}>
            <Paragraph fontSize={"none"} fontWeight={"medium"} className={clsx(styles.title, styles.purple)}>Интернет-магазин
              медицинской
              одежды</Paragraph>
            <Paragraph className={styles.title}>Разнообразный выбор стильной медицинской одежды
              и&nbsp;аксессуаров.</Paragraph>
          </div>
          <a href={"https://tezis-shop.ru"} target={"_blank"} rel={"noreferrer"}
            className={clsx(styles.link, styles.purple)}>Перейти в
            магазин <IconArrow width={16} height={16} /></a>
        </li>
        <li className={styles.item}>
          <Image className={styles.image} src={"/img/about-page/amrita-links/service.png"} alt={""} width={560}
            height={196} />
          <div className={styles.content}>
            <Paragraph fontSize={"none"} fontWeight={"medium"} className={clsx(styles.title, styles.green)}>Сервисный
              центр </Paragraph>
            <Paragraph className={styles.title}>Полный спектр услуг по&nbsp;ремонту
              и&nbsp;обслуживанию стоматологического оборудования по&nbsp;всей стране.</Paragraph>
          </div>
          <a href={"https://amrita-dent.ru/service"} target={"_blank"} rel={"noreferrer"}
            className={clsx(styles.link, styles.green)}>Перейти
            в магазин <IconArrow width={16} height={16} /></a>
        </li>
      </ul>
    </SectionItem>
  );
};

export default AmritaLinks;
