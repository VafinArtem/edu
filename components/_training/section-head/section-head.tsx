import React, {ReactElement} from "react";
import {SectionHeadProps} from "./section-head.props";
import styles from "./section-head.module.css";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";

const SectionHead = ({title, text, children}: SectionHeadProps): ReactElement | null => {
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

export default SectionHead;
