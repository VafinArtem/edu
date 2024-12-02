"use client";

import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import dynamic from "next/dynamic";
import React, {ReactElement} from "react";
import styles from "./reviews.module.css";
import {ReviewsProps} from "./reviews.props";

const List = dynamic(() => import("./components/list/list"), {
  ssr: false,
});

const Reviews = ({className}: ReviewsProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <Heading tag={`h2`} className={`visually-hidden`}>Отзывы</Heading>
      <div className={styles.content}>
        <Paragraph fontSize={"asDefaultTitle"} className={styles.title}>
          Более 30 000 человек выбрали наш центр
        </Paragraph>
        <dl className={styles.options}>
          <div className={styles.optionItem}>
            <dt className={styles.termin}>92%</dt>
            <dt className={styles.description}>Ценят организацию<br />
              и&nbsp;комфортные условия
            </dt>
          </div>
          <div className={styles.optionItem}>
            <dt className={styles.termin}>84%</dt>
            <dt className={styles.description}>Приходят на&nbsp;лекции<br />
              повторно
            </dt>
          </div>
        </dl>
      </div>
      <List />
    </SectionItem>
  );
};

export default Reviews;
