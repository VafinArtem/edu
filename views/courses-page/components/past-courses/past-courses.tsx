import React, {ReactElement} from "react";
import {PastCoursesProps} from "./past-courses.props";
import styles from "./past-courses.module.css";
import Heading from "@/components/_tags/heading/heading";
import {courses} from "@/mocs/courses";
import CourseShortItem from "@/components/_common/course-short-item/course-short-item";
import clsx from "clsx";

const PastCourses = ({}: PastCoursesProps): ReactElement | null => {
  return (
    <section className={clsx(styles.wrapper, `container`)}>
      <Heading tag={`h2`} fontSize={"mini"} className={styles.title}>Прошедшие курсы</Heading>
      <ul className={styles.list}>
        {courses.map((course) => <CourseShortItem course={course} key={course.id} isPastCourse withPhoto />)}
      </ul>
    </section>
  );
};

export default PastCourses;
