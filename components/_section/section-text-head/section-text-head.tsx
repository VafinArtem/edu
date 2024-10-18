import React, {ReactElement} from "react";
import {SectionTextHeadProps} from "./section-text-head.props";
import styles from "./section-text-head.module.css";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";

const SectionTextHead = ({title, text, children}: SectionTextHeadProps): ReactElement | null => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textContent}>
        <Heading tag={`h2`}>{title}</Heading>
        {text && <Paragraph dangerouslySetInnerHTML={{__html: text}} />}
      </div>
      {children}
    </div>
  );
};

export default SectionTextHead;
