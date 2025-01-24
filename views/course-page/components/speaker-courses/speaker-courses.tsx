"use client";

import ButtonArrow from "@/components/_buttons/button-arrow/button-arrow";
import CourseShortItem from "@/components/_common/course-short-item/course-short-item";
import SectionCenterHead from "@/components/_section/section-center-head/section-center-head";
import SectionItem from "@/components/_section/section-item/section-item";
import Heading from "@/components/_tags/heading/heading";
import {Route} from "@/helpers/route";
import useIsResolution from "@/hooks/useIsResolution";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, {ReactElement, useEffect, useState} from "react";
import styles from "./speaker-courses.module.css";
import {SpeakerCoursesProps} from "./speaker-courses.props";

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
  const isNotDesktop = useIsResolution({min: 0, max: 1499});

  const [showItems, setShowItems] = useState<boolean>(false);

  const getCondition = () => {
    if (isNotDesktop) {
      return courses.length > 6;
    }

    return courses.length > 8;
  };

  useEffect(() => {
    setShowItems(!getCondition());
  }, [isNotDesktop]);

  return (
    <SectionItem className={className}>
      <SectionCenterHead>
        <div className={clsx(styles.avatars, {
          [styles.oneSpeaker]: speakers.length === 1,
        })}>
          {speakers.map((item, index) => <Image quality={95} className={clsx(styles.avatar, {
              [styles.oneSpeaker]: speakers.length === 1,
            })} src={`${process.env.NEXT_PUBLIC_IMAGE_SERVER}${item.avatar}`} alt={``}
              width={330}
              height={166}
              style={{zIndex: speakers.length - index, backgroundColor: item.photoBackground}}
              key={item.id}
            />,
          )}
        </div>
        <Heading
          tag={`h2`}
          align={`center`}
          className={styles.title}
          dangerouslySetInnerHTML={{__html: `Курсы ${getTitle(speakers.map((item) => `${item.surname ? `${item.surname} ` : ``}${item.name}`))}`}} />
        <ButtonArrow
          component={Link}
          href={Route.COURSES}
          iconDirection={"mid-right"}
          color={"primary"}
          className={styles.link}
          borderRadius={"small"}
          borderColor={"default"}
        >Все курсы учебного центра</ButtonArrow>
      </SectionCenterHead>
      <div className={clsx(styles.list, {
        [styles.show]: showItems,
      })}>
        {courses.map((item) => <CourseShortItem className={styles.item} course={item} key={item.id} />)}
      </div>
      {getCondition() && <button
        className={styles.showAll}
        type={"button"}
        onClick={() => setShowItems(!showItems)}
      >
        {showItems ? "Скрыть" : "Показать всё"}
      </button>}
    </SectionItem>
  );
};

export default SpeakerCourses;
