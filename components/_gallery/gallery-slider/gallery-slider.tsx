"use client";

import RoundButton from "@/components/_slider/round-button/round-button";
import clsx from "clsx";
import Image from "next/image";
import React, {ReactElement, useRef} from "react";
import {Navigation} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperCore} from "swiper/types";
import styles from "./gallery-slider.module.css";
import {GallerySliderProps} from "./gallery-slider.props";
import "swiper/css";

const GallerySlider = ({photos}: GallerySliderProps): ReactElement | null => {
  const swiperRef = useRef<SwiperCore>();

  return (
    <Swiper
      modules={[Navigation]}
      className={styles.slider}
      loop={true}
      spaceBetween={10}
      slidesPerView={1}
      breakpoints={{
        767: {
          slidesPerView: 2,
        },
        1024: {
          spaceBetween: 20,
          slidesPerView: 3,
        },
        1499: {
          spaceBetween: 20,
          slidesPerView: 4,
        },
      }}
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      {photos.map((photo, index) => (<SwiperSlide className={styles.slide} key={index}>
        <Image src={photo} alt={``} width={440} height={302}
          quality={95}
          loading={"lazy"}
          className={styles.image} />
      </SwiperSlide>))}
      <div className={clsx(styles.buttons)}>
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
  );
};

export default GallerySlider;
