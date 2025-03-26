"use client";

import CourseShortItem from "@/components/_common/course-short-item/course-short-item";
import SectionItem from "@/components/_section/section-item/section-item";
import SectionTextHead from "@/components/_section/section-text-head/section-text-head";
import Button from "@/components/_slider/button/button";
import clsx from "clsx";
import React, {ReactElement, useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperCore} from "swiper/types";
import styles from "./courses-slider.module.css";
import {CoursesSliderProps} from "./courses-slider.props";
import "swiper/css";

const CoursesSlider = ({title, className, courses, cardColor, id}: CoursesSliderProps): ReactElement | null => {
  const [isEnd, setIsEnd] = useState<boolean>(false);
  const [isBeginning, setIsBeginning] = useState<boolean>(false);
  const swiperRef = useRef<SwiperCore>();

  return (
    <SectionItem className={clsx(styles.wrapper, className)} id={id ?? ""}>
      <SectionTextHead className={styles.head} title={title} noWrap>
        <div className={styles.buttons}>
          <Button
            disabled={isBeginning}
            direction={"prev"}
            onClick={() => {
              swiperRef.current?.slidePrev();
            }}
            background={cardColor === "white" ? cardColor : "primary"}
            size={"mini"}
          />
          <Button
            disabled={isEnd}
            direction={"next"}
            onClick={() => {
              swiperRef.current?.slideNext();
            }}
            background={cardColor === "white" ? cardColor : "primary"}
            size={"mini"}
          />
        </div>
      </SectionTextHead>
      <div className={clsx(styles.container)}>
        <Swiper
          className={styles.slider}
          spaceBetween={10}
          slidesPerView={"auto"}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1500: {
              slidesPerView: 3,
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

      </div>
    </SectionItem>
  );
};

export default CoursesSlider;
