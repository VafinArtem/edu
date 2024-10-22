import React, {ReactElement} from "react";
import {SimilarCoursesProps} from "./similar-courses.props";
import styles from "./similar-courses.module.css";
import SectionItem from "@/components/_training/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import CourseShortItem from "@/components/_common/course-short-item/course-short-item";
import IconArrow from "./arrow-mid-right.svg";
import Button from "@/components/_buttons/button/button";
import Link from "next/link";

const SimilarCourses = ({className, courses, title, cardColor}: SimilarCoursesProps): ReactElement | null => {
  return (
    <SectionItem className={className}>
      <Heading tag={`h2`}>{title}</Heading>
      <div className={styles.list}>
        {courses.map((course) => <CourseShortItem
          className={styles.item}
          course={course}
          background={cardColor}
          withPhoto={true}
          key={course.id} />)}
      </div>
      <Button component={Link} className={styles.link} href={`#`}>Смотреть все 129 курсов в
        каталоге <IconArrow className={styles.icon} width={16} height={16} /></Button>
    </SectionItem>
  );
};

export default SimilarCourses;
