import React, {ReactElement} from "react";
import {AboutProps} from "./about.props";
import styles from "./about.module.css";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";

const About = ({content, ...props}: AboutProps): ReactElement | null => {
  return (
    <SectionItem className={`container`} {...props}>
      <Heading tag={`h2`} className={styles.title}>О&nbsp;преподавателе</Heading>
      <div className={styles.content} dangerouslySetInnerHTML={{__html: content}}></div>
    </SectionItem>
  );
};

export default About;
