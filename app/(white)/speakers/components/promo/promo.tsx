import React, {ReactElement} from "react";
import {PromoProps} from "./promo.props";
import styles from "./promo.module.css";
import clsx from "clsx";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import Button from "@/components/_buttons/button/button";

const Promo = ({className}: PromoProps): ReactElement | null => {

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
          <Paragraph className={styles.specialityTitle}>Пародонтальная терапия, пластика рецессий в области зубов и
            имплантатов
            с использованием микрохирургических техник.</Paragraph>
        </div>
        <Button component={`a`} href={`#courses`} className={styles.button}>Посмотреть курсы</Button>
      </div>
      <div className={styles.image}></div>
    </section>
  );
};

export default Promo;
