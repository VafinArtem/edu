"use client";

import React, {ReactElement} from "react";
import {getImageProps} from "next/image";
import {PromoProps} from "./promo.props";
import styles from "./promo.module.css";
import clsx from "clsx";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import Button from "@/components/_buttons/button/button";
import Timer from "@/components/_common/timer/timer";

const Promo = ({className, icon, courseTypeName}: PromoProps): ReactElement | null => {
  const common = {alt: "", quality: 95};
  const {
    props: {srcSet: desktop, ...rest},
  } = getImageProps({
    ...common,
    width: 645,
    height: 660,
    priority: true,
    src: "/img/components/promo/author-desktop.jpg",
  });
  const {
    props: {srcSet: laptop},
  } = getImageProps({
    ...common,
    width: 440,
    height: 510,
    src: "/img/components/promo/author-laptop.jpg",
  });
  const {
    props: {srcSet: tablet},
  } = getImageProps({
    ...common,
    width: 708,
    height: 200,
    src: "/img/components/promo/author-tablet.jpg",
  });
  const {
    props: {srcSet: mobile},
  } = getImageProps({
    ...common,
    width: 310,
    height: 150,
    src: "/img/components/promo/author-mobile.jpg",
  });

  return (
    <section className={clsx(className, styles.wrapper)}>
      <div className={styles.textContent}>
        <div className={styles.head}>
          <p className={styles.type}>
            {icon && <span className={styles.iconType} dangerouslySetInnerHTML={{__html: icon}}></span>}
            {courseTypeName}
          </p>
          <p className={styles.date}>с 11 по 12 июля</p>
          <p className={styles.location}>Санкт-Петербург</p>
        </div>
        <div className={styles.main}>
          <Heading tag={`h1`} className={styles.title}>Клиническая парадонтология. Междисциплинарный подход
            в лечении парадонтологических пациентов</Heading>
          <Paragraph className={styles.text}>Лекция и практика для пародонтологов, стоматологов-терапевтов,
            стоматологов-хирургов, гигиенистов.</Paragraph>
        </div>
        <div className={styles.footer}>
          <Button onClick={() => {
          }}>Записаться на {courseTypeName.toLowerCase()}</Button>
          <Timer text={`До повышения стоимости`} />
        </div>
      </div>
      <div className={styles.sliderWrapper}>
        <div className={styles.slide}>
          <picture className={styles.picture}>
            <source media="(min-width: 1500px)" srcSet={desktop} />
            <source media="(max-width: 530px)" srcSet={mobile} />
            <source media="(max-width: 1099px)" srcSet={tablet} />
            <source media="(max-width: 1499px)" srcSet={laptop} />
            <img {...rest} width={440} height={510} className={styles.image} />
          </picture>
          <p className={styles.speaker}>
            <span className={styles.name}>Волкова Юлия Валерьевна</span>
            <span className={styles.position}>Стоматолог-хирург, пародонтолог</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Promo;
