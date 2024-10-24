"use client";

import React, {ReactElement, useState} from "react";
import Image from "next/image";
import clsx from "clsx";
import {SpeakerCoursesProps} from "./speaker-courses.props";
import styles from "./speaker-courses.module.css";
import SectionItem from "@/components/_training/section-item/section-item";
import SectionCenterHead from "@/components/_training/section-center-head/section-center-head";
import Heading from "@/components/_tags/heading/heading";
import {Route} from "@/helpers/route";
import CourseShortItem from "@/components/_common/course-short-item/course-short-item";
import ButtonArrow from "@/components/_buttons/button-arrow/button-arrow";
import Link from "next/link";

const getTitle = (names: string[]) => {
  return names.map((item, index) => {
    if (names.length === 1) {
      return item;
    }

    if (index === names.length - 1) {
      return `и&nbsp;${item}`;
    }

    if (index === names.length - 2) {
      return item;
    }

    return `${item},`;
  }).join(` `);
};

const SpeakerCourses = ({speakers, courses, className}: SpeakerCoursesProps): ReactElement | null => {
  const [showItems, setShowItems] = useState<boolean>(false);
  return (
    <SectionItem className={className}>
      <SectionCenterHead>
        <div className={clsx(styles.avatars, {
          [styles.oneSpeaker]: speakers.length === 1,
        })}>
          {speakers.map((item, index) => <Image quality={95} className={clsx(styles.avatar, {
            [styles.oneSpeaker]: speakers.length === 1,
          })} src={item.avatar} alt={``}
            width={127}
            height={127}
            style={{zIndex: speakers.length - index}}
            key={item.id} />)}
        </div>
        <Heading
          tag={`h2`}
          align={`center`}
          className={styles.title}
          dangerouslySetInnerHTML={{__html: `Курсы ${getTitle(speakers.map((item) => item.name))}`}} />
        <ButtonArrow
          component={Link}
          href={Route.TRAINING}
          iconDirection={"mid-right"}
          color={"primary"}
          className={styles.link}
          borderRadius={"small"}
        >Все курсы учебного центра</ButtonArrow>
      </SectionCenterHead>
      <div className={clsx(styles.list, {
        [styles.show]: showItems,
      })}>
        {courses.map((item) => <CourseShortItem className={styles.item} course={item} key={item.id} />)}
      </div>
      <button
        className={styles.showAll}
        onClick={() => setShowItems(!showItems)}
      >
        {showItems ? "Скрыть" : "Показать всё"}
      </button>
    </SectionItem>
  );
};

export default SpeakerCourses;
