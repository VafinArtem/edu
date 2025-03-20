import CourseShortItem from "@/components/_common/course-short-item/course-short-item";
import SectionHead from "@/components/_section/section-head/section-head";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {getCourseDurationText} from "@/helpers/dates-helpers";
import ThemeList from "@/views/one-news-page/components/about-course/components/theme-list/theme-list";
import React, {ReactElement} from "react";
import styles from "./about-course.module.css";
import {AboutCourseProps} from "./about-course.props";

const AboutCourse = ({course}: AboutCourseProps): ReactElement | null => {
  const {typeName, promoDescription, dates, courseCard, themes} = course;
  return (
    <SectionItem gap={"20"}>
      <SectionHead>
        <Heading tag={`h2`}>О {typeName.prepositional}</Heading>
      </SectionHead>
      <div className={styles.inner}>
        <div className={styles.textContent}>
          <Paragraph fontWeight={"light"}>{promoDescription}</Paragraph>
          <Paragraph fontWeight={"light"}>Длительность {typeName.genitive} — {getCourseDurationText(dates)}</Paragraph>
        </div>
        {courseCard && <CourseShortItem
          className={styles.item}
          course={courseCard}
          background={`white`}
          withPhoto={false}
        />}

        {themes.theory.length > 0 && <ThemeList
          title={"Темы лекций:"}
          themes={([] as string[]).concat(...themes.theory)}
          dotColor={"theory"}
        />}

        {themes.practice.length > 0 && <ThemeList
          title={"Темы практики:"}
          themes={([] as string[]).concat(...themes.theory)}
          dotColor={"practice"}
        />}

      </div>
    </SectionItem>
  );
};

export default AboutCourse;
