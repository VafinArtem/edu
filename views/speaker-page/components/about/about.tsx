import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import React, {ReactElement} from "react";
import styles from "./about.module.css";
import {AboutProps} from "./about.props";

const About = ({content, ...props}: AboutProps): ReactElement | null => {
  return (
    <SectionItem className={`container`} {...props}>
      <Heading tag={`h2`} className={styles.title}>О&nbsp;преподавателе</Heading>
      <Paragraph fontWeight={"light"} className={styles.content}>{content}</Paragraph>
    </SectionItem>
  );
};

export default About;
