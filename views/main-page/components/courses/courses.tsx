import Button from "@/components/_buttons/button/button";
import FilterButton from "@/components/_buttons/filter-button/filter-button";
import CourseShortItem from "@/components/_common/course-short-item/course-short-item";
import SectionItem from "@/components/_section/section-item/section-item";
import Paragraph from "@/components/_tags/paragraph/paragraph";
import {Route} from "@/helpers/route";
import Link from "next/link";
import React, {ReactElement} from "react";
import styles from "./courses.module.css";
import {CoursesProps} from "./courses.props";

const Courses = ({courseTypes, courses}: CoursesProps): ReactElement | null => {
  return (
    <SectionItem className={`container`}>
      <div className={styles.head}>
        <Paragraph fontSize={"none"} className={styles.topText}>Каждый месяц&nbsp;&mdash; разнообразный выбор лекций,
          мастер-классов и&nbsp;вебинаров. <span className={styles.gray}>Для опытнах и&nbsp;начинающих специалистов разных направлений.</span></Paragraph>
        {courseTypes && <div className={styles.filters}>
          {courseTypes.map((type) => <FilterButton key={type.value} option={type} />)}
        </div>}
      </div>

      <div className={styles.list}>
        {courses.map((course) => <CourseShortItem course={course} key={course.id} withPhoto />)}
      </div>

      <Button component={Link} href={Route.COURSES} className={styles.link}>Смотреть все курсы в каталоге</Button>
    </SectionItem>
  );
};

export default Courses;
