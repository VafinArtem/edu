import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";
import React, {ReactElement} from "react";
import styles from "./section-text-head.module.css";
import {SectionTextHeadProps} from "./section-text-head.props";

const SectionTextHead = ({title, text, noWrap, children, className}: SectionTextHeadProps): ReactElement | null => {
  return (
    <div className={clsx(styles.wrapper, className, {
      [styles.noWrap]: noWrap,
    })}>
      <div className={styles.textContent}>
        <Heading tag={`h2`}>{title}</Heading>
        {text && <Paragraph dangerouslySetInnerHTML={{__html: text}} />}
      </div>
      {children}
    </div>
  );
};

export default SectionTextHead;
