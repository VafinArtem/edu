"use client";

import React, {ReactElement, useRef} from "react";
import {FaqProps} from "./faq.props";
import styles from "./faq.module.css";
import SectionCenterHead from "@/components/_section/section-center-head/section-center-head";
import Heading from "@/components/_tags/heading/heading";
import SectionItem from "@/components/_section/section-item/section-item";
import QaItem from "@/components/_course/qa-item/qa-item";

const Faq = ({qa, className}: FaqProps): ReactElement | null => {
  const ref = useRef<HTMLDivElement>(null!);

  return (
    <SectionItem className={className}>
      <SectionCenterHead>
        <Heading tag={`h2`}>Отвечаем на&nbsp;вопросы</Heading>
      </SectionCenterHead>
      <div className={styles.list} ref={ref}>
        {qa.map((item) => <QaItem className={styles.item} parentRef={ref} key={item.id} qa={item} />)}
      </div>
    </SectionItem>
  );
};

export default Faq;
