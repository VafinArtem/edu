import React, {ReactElement} from "react";
import {PromoProps} from "./promo.props";
import styles from "./promo.module.css";
import clsx from "clsx";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import Button from "@/components/_buttons/button/button";
import {getImageProps} from "next/image";

const Promo = ({className}: PromoProps): ReactElement | null => {
  const common = {alt: "", quality: 95};
  const {
    props: {srcSet: desktop, ...rest},
  } = getImageProps({
    ...common,
    width: 482,
    height: 480,
    priority: true,
    src: "/img/speaker-page/promo/speaker-desktop.png",
  });
  const {
    props: {srcSet: laptop},
  } = getImageProps({
    ...common,
    width: 384,
    height: 433,
    src: "/img/speaker-page/promo/speaker-laptop.png",
  });
  const {
    props: {srcSet: tablet},
  } = getImageProps({
    ...common,
    width: 326,
    height: 200,
    src: "/img/speaker-page/promo/speaker-tablet.png",
  });
  const {
    props: {srcSet: mobile},
  } = getImageProps({
    ...common,
    width: 234,
    height: 150,
    src: "/img/speaker-page/promo/speaker-mobile.png",
  });
  return (
    <section className={clsx(className, styles.wrapper)}>
      <div className={styles.textContent}>
        <Heading tag={`h1`} className={styles.title}>Волкова Юлия Валерьевна</Heading>
        <ul className={styles.positions}>
          <li className={styles.position}>Стоматолог-хирург</li>
          <li className={styles.position}>Пародонтолог</li>
        </ul>
        <Paragraph>Стаж работы более 25 лет</Paragraph>
        <div className={styles.speciality}>
          <Paragraph className={styles.specialityTitle}>Специализация</Paragraph>
          <Paragraph>Пародонтальная терапия, пластика рецессий в&nbsp;области зубов и&nbsp;имплантатов
            с&nbsp;использованием микрохирургических техник.</Paragraph>
        </div>
        <Button component={`a`} href={`#courses`} className={styles.button}>Посмотреть курсы</Button>
      </div>
      <picture className={styles.picture} style={{backgroundColor: `#DDDAE3`}}>
        <source media="(min-width: 1500px)" srcSet={desktop} />
        <source media="(max-width: 530px)" srcSet={mobile} />
        <source media="(max-width: 1099px)" srcSet={tablet} />
        <source media="(max-width: 1499px)" srcSet={laptop} />
        <img {...rest} width={440} height={510} className={styles.image} />
      </picture>
    </section>
  );
};

export default Promo;
