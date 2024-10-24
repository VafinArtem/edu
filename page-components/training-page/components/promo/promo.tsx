"use client";

import React, {ReactElement} from "react";
import {PromoProps} from "./promo.props";
import styles from "./promo.module.css";
import clsx from "clsx";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import Button from "@/components/_buttons/button/button";
import Slider from "@/app/(gray)/training/components/promo/components/slider/slider";
import dynamic from "next/dynamic";

const Timer = dynamic(() => import("@/components/_common/timer/timer"), {
  ssr: false,
});

const Promo = ({
  name,
  description,
  icon,
  courseTypeName,
  saleTimestamp,
  city,
  className,
  date,
  speakers,
}: PromoProps): ReactElement | null => {
  return (
    <section className={clsx(className, styles.wrapper)}>
      <div className={styles.textContent}>
        <div className={styles.head}>
          <p className={styles.type}>
            {icon && <span className={styles.iconType} dangerouslySetInnerHTML={{__html: icon}}></span>}
            {courseTypeName}
          </p>
          <p className={styles.date}>{date}</p>
          {city && <p className={styles.location}>{city}</p>}
        </div>
        <div className={styles.main}>
          <Heading tag={`h1`} className={styles.title}>{name}</Heading>
          <Paragraph className={styles.text}>{description}</Paragraph>
        </div>
        <div className={styles.footer}>
          <Button onClick={() => {
          }}>Записаться на {courseTypeName.toLowerCase()}</Button>
          {saleTimestamp && <Timer timestampToEnd={saleTimestamp} text={`До повышения стоимости`} />}
        </div>
      </div>
      <Slider speakers={speakers} className={styles.sliderWrapper} />
    </section>
  );
};

export default Promo;
