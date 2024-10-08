import React, {ReactElement} from "react";
import {SimilarCoursesProps} from "./similar-courses.props";
import styles from "./similar-courses.module.css";
import SectionItem from "@/components/_training/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import CourseShortItem from "@/components/_common/course-short-item/course-short-item";
import Button from "@/components/_links/button/button";
import IconArrow from "./arrow-mid-right.svg";

const SimilarCourses = ({className, courses}: SimilarCoursesProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <Heading tag={`h2`}>Может заинтересовать</Heading>
      <ul className={styles.list}>
        {courses.map((course) => <CourseShortItem
          className={styles.item}
          course={course}
          background={`white`}
          withPhoto={true}
          key={course.id} />)}
      </ul>
      <Button className={styles.link} href={`#`}>Смотреть все 129 курсов в
        каталоге <IconArrow className={styles.icon} width={16} height={16} /></Button>
    </SectionItem>
  );
};

export default SimilarCourses;
