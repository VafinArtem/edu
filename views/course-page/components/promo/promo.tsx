"use client";

import Button from "@/components/_buttons/button/button";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {sendMetric} from "@/helpers/metricks";
import Slider from "@/views/course-page/components/promo/components/slider/slider";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Link from "next/link";
import React, {ReactElement} from "react";
import styles from "./promo.module.css";
import {PromoProps} from "./promo.props";

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
    <section className={clsx(className, styles.wrapper, {
      [styles.oneColumn]: speakers.length === 0,
    })}>
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
          <Button component={Link} href={`#registration`} onClick={() => {
            sendMetric(`reachGoal`, {options: `course-promo-record-click`});
          }}>Записаться на {courseTypeName.toLowerCase()}</Button>
          {saleTimestamp && <Timer timestampToEnd={saleTimestamp} text={`До повышения стоимости`}
            withoutTextOptions={{mobile: true}} />}
        </div>
      </div>
      {speakers.length > 0 && <Slider speakers={speakers} className={styles.sliderWrapper} />}
    </section>
  );
};

export default Promo;
