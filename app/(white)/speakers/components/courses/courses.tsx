import React, {ReactElement} from "react";
import {CoursesProps} from "./courses.props";
import styles from "./courses.module.css";
import SectionItem from "@/components/_section/section-item/section-item";
import SectionHead from "@/components/_section/section-head/section-head";
import Heading from "@/components/_tags/heading/heading";
import ButtonArrow from "@/components/_buttons/button-arrow/button-arrow";
import Link from "next/link";
import {Route} from "@/helpers/route";
import CourseShortItem from "@/components/_common/course-short-item/course-short-item";

const Courses = ({courses, className, ...props}: CoursesProps): ReactElement | null => {
  return (
    <SectionItem className={className} {...props}>
      <SectionHead>
        <Heading tag={`h2`}>Курсы Юлии Валерьевны</Heading>
        <ButtonArrow
          component={Link}
          href={Route.TRAINING}
          size={"small"}
          color={"primary"}
          className={styles.button}
          iconDirection={"mid-right"}
        >Все курсы учебного центра</ButtonArrow>
      </SectionHead>
      <div className={styles.list}>
        {courses.map((course) => <CourseShortItem
          className={styles.item}
          course={course}
          background={`gray`}
          withPhoto={true}
          positionPhoto={"left"}
          key={course.id} />)}
      </div>
    </SectionItem>
  );
};

export default Courses;
