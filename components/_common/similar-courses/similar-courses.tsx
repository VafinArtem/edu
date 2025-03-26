"use client";

import Button from "@/components/_buttons/button/button";
import CourseShortItem from "@/components/_common/course-short-item/course-short-item";
import SectionItem from "@/components/_section/section-item/section-item";
import RoundButton from "@/components/_slider/round-button/round-button";
import Heading from "@/components/_tags/heading/heading";
import {Route} from "@/helpers/route";
import clsx from "clsx";
import Link from "next/link";
import React, {ReactElement, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperCore} from "swiper/types";
import IconArrow from "./arrow-mid-right.svg";
import styles from "./similar-courses.module.css";
import {SimilarCoursesProps} from "./similar-courses.props";
import "swiper/css";

const SimilarCourses = ({className, courses, title, cardColor}: SimilarCoursesProps): ReactElement | null => {
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isBeginning, setIsBeginning] = useState<boolean>(false);
  const swiperRef = useRef<SwiperCore>();

  return (
    <SectionItem className={className} style={{overflow: "hidden"}}>
      <Heading tag={`h2`} className={"container"}>{title}</Heading>
      <div className={clsx(styles.container, "container")}>
        <Swiper
          className={styles.slider}
          spaceBetween={10}
          slidesPerView={"auto"}
          breakpoints={{
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1500: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onInit={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {courses.map((course) => <SwiperSlide key={course.id} className={styles.slide}>
            <CourseShortItem
              className={styles.item}
              course={course}
              background={cardColor}
              withPhoto={true} />
          </SwiperSlide>)}
        </Swiper>
        <div className={styles.buttons}>
          <RoundButton disabled={isBeginning} direction={"prev"}
            onClick={() => {
              swiperRef.current?.slidePrev();
            }} />
          <RoundButton disabled={isEnd} direction={"next"}
            onClick={() => {
              swiperRef.current?.slideNext();
            }} />
        </div>
      </div>
      <Button component={Link} className={styles.link} href={Route.COURSES}>Смотреть все курсы в
        каталоге <IconArrow className={styles.icon} width={16} height={16} /></Button>
    </SectionItem>
  );
};

export default SimilarCourses;
