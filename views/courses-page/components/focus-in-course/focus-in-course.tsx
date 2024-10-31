import React, {ReactElement} from "react";
import {FocusInCourseProps} from "./focus-in-course.props";
import styles from "./focus-in-course.module.css";
import Heading from "@/components/_tags/heading/heading";
import SectionItem from "@/components/_section/section-item/section-item";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import clsx from "clsx";

const FocusInCourse = ({}: FocusInCourseProps): ReactElement | null => {
  return (
    <SectionItem className={`container`}>
      <Heading tag={`h1`} className={styles.title}>На&nbsp;что делаем упор в&nbsp;курсах</Heading>

      <ul className={styles.list}>
        <li className={clsx(styles.item, styles.practice)}>
          <Paragraph>
            <b>Больше практики:</b> практические занятия, тренировки на&nbsp;фантомах
            и&nbsp;биоматериалах помогают принимать верные решения
            в&nbsp;стоматологической практике.
          </Paragraph>
        </li>
        <li className={clsx(styles.item, styles.knowledge)}>
          <Paragraph>
            <b>Актуальность знаний:</b> мы&nbsp;работаем только с&nbsp;практикующими специалистами чьи знания
            подкреплены дипломами гос. образца.
          </Paragraph>
        </li>
      </ul>
    </SectionItem>
  );
};

export default FocusInCourse;
