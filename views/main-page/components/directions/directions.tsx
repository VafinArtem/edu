"use client";

import React, {ReactElement, useRef} from "react";
import {DirectionsProps} from "./directions.props";
import styles from "./directions.module.css";
import "swiper/css";
import "./swiper.css";
import SectionItem from "@/components/_section/section-item/section-item";
import SectionCenterHead from "@/components/_section/section-center-head/section-center-head";
import Heading from "@/components/_tags/heading/heading";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperCore} from "swiper/types";
import Direction from "@/views/main-page/components/directions/components/direction/direction";
import RoundButton from "@/components/_slider/round-button/round-button";
import clsx from "clsx";

const Directions = ({directions}: DirectionsProps): ReactElement | null => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <SectionItem>
      <SectionCenterHead>
        <Heading tag={`h2`}>Выберите своё направление</Heading>
      </SectionCenterHead>

      <Swiper
        className={styles.slider}
        enabled={false}
        breakpoints={{
          768: {
            enabled: true,
            spaceBetween: 20,
            slidesPerView: "auto",
            loop: true,
            centeredSlides: true,
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {directions.map((direction) => <SwiperSlide key={direction.id} className={styles.slide}>
          <Direction direction={direction} />
        </SwiperSlide>)}
        {directions.map((direction) => <SwiperSlide key={direction.id} className={clsx(styles.slide, styles.double)}>
          <Direction direction={direction} />
        </SwiperSlide>)}
        <div className={styles.buttons}>
          <RoundButton direction={"prev"}
            onClick={() => {
              swiperRef.current?.slidePrev();
            }} />
          <RoundButton direction={"next"}
            onClick={() => {
              swiperRef.current?.slideNext();
            }} />
        </div>
      </Swiper>
    </SectionItem>
  );
};

export default Directions;
